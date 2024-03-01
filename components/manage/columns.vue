<template>
    <div class="manageColumnsContainer">
        <div class="manageColumnsSection">
            <div class="manageColumnsLabel">Available columns</div>
            <div class="manageColumnsSearchForm">
                <Field placeholder="Search" />
            </div>
            <div class="manageColumnsList availableColumnsList">
                <div class="manageColumnItem" v-for="column in availableColumns" :key="column.prop" :data-prop="column.prop">
                    <div class="manageColumnItemLabel">{{column.label}}</div>
                </div>
            </div>
        </div>
        <div class="manageColumnsSection">
            <div class="manageColumnsLabel">Selected columns</div>
            <div class="manageColumnsSearchForm">
                <Field placeholder="Search" />
            </div>
            <div class="manageColumnsList listForSelectedColumns">
                <div class="manageColumnItem" v-for="column in selectedColumns" :key="column.prop" :data-prop="column.prop">
                    <div class="manageColumnItemLabel">{{column.label}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const nuxtApp = useNuxtApp()
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        }
    })
    const {columns} = props

    const availableColumns = computed(() => {
        return columns.filter((column)=>{
            if (column?.isDisplayed == true) return false
            if (column?.isDisplayed == false) return true
            if (column?.isDefaultColumn == false) return true
            return false
        })
    })
    const selectedColumns = computed(() => {
        let modifiedColumns = columns.filter((column)=>{
            if (column?.isDisplayed == true) return true
            if (column?.isDisplayed == false) return false
            if (column?.isDefaultColumn == false) return false
            return true
        })
        modifiedColumns.sort(sortByOrder)
        return modifiedColumns
    })

    let columnsHandlers = {
        isDragMode: false,
        originalColumn: "",
        originalList: "",
        clone: null as unknown as HTMLDivElement,
        startPosition: {x:0,y:0},

    };

    //Movable columns
    const columnManagementMouseDownEvent = (event:MouseEvent)=>{
        //Detect if click on movable node
        const target = event.target as HTMLDivElement
        if (target != null && target.closest(".manageColumnItem")){
            columnsHandlers.isDragMode = true
            columnsHandlers.originalColumn = target.closest(".manageColumnItem")!.dataset["prop"]
            columnsHandlers.originalList = target.closest(".manageColumnsList")?.classList.contains("listForSelectedColumns") ? "selected" : "available"
            columnsHandlers.startPosition.x = event.pageX
            columnsHandlers.startPosition.y = event.pageY
            
            //Create ghost-node
            columnsHandlers.clone = document.createElement("div")
            columnsHandlers.clone.className = "manageColumnItemClone"
            columnsHandlers.clone.innerText = columns[columns.findIndex(({prop})=>prop==columnsHandlers.originalColumn)]?.label 
            columnsHandlers.clone.style.top = `${columnsHandlers.startPosition.y}px`
            columnsHandlers.clone.style.left = `${columnsHandlers.startPosition.x}px`
            columnsHandlers.clone.style.width = `${target.closest(".manageColumnItem")?.getBoundingClientRect().width}px`
            document.body.appendChild(columnsHandlers.clone)
        }
    }

    const columnManagementMouseMoveEvent = (event)=>{
        if(columnsHandlers.isDragMode && columnsHandlers.clone){
            if(event.stopPropagation) event.stopPropagation();
            if(event.preventDefault) event.preventDefault();

            columnsHandlers.clone.style.top = `${event.pageY}px`
            columnsHandlers.clone.style.left = `${event.pageX}px`

            //Selected column index
            let selectedColumnIndex = columns.findIndex(({prop})=>prop==columnsHandlers.originalColumn)

            //Detect cursor location
            const elements: Array<Element> | null = document.elementsFromPoint(
                (event as any).pageX,
                (event as any).pageY
            )
            if (elements && elements.length > 0) {
                //Detect if cursor over list
                let index = elements.findIndex(({ className }) => className == "manageColumnItem")
                if (index >= 0) {
                    //Look for detected element
                    let columnIndex = columns.findIndex(({prop})=>prop==elements[index].dataset["prop"])
                    
                    //Next - if drag available column into available list - do nothing
                    if (columnsHandlers.originalList == "available" && elements[index].closest(".availableColumnsList")){
                        //Check if column alredy marked as displayed
                        if (columns[selectedColumnIndex].isDisplayed){
                            let updateColumns = columns
                            updateColumns[selectedColumnIndex].isDisplayed = false
                            columns.value = updateColumns
                        }
                        return;
                    }

                    //Hide ghost node
                    columnsHandlers.clone.classList.add("nodeActive")
                    if (columnIndex >= 0){
                        //Insert element at this index
                        //Mark column as visible
                        if (typeof columns[selectedColumnIndex].isDisplayed == "undefined" || columns[selectedColumnIndex].isDisplayed == false){
                            let updateColumns = columns
                            updateColumns[selectedColumnIndex].isDisplayed = true

                            //Change display order depending from dom
                            const parentList = (elements[index] as any).parentNode
                            let childrens = Array.from(parentList.children)

                            //Decode cursor placement
                            let overChildIndex = childrens.indexOf(elements[index])
                            updateColumns[selectedColumnIndex].order = overChildIndex + 1

                            updateColumns = updateColumns.map((col)=>{
                                //Look if column in displayed list
                                if (col.isDisplayed == false) return col
                                if (col.isDefaultColumn == false) return col

                                //Find column dom element
                                let inSelectedListIndex = childrens.findIndex((colNode)=>{
                                    return colNode.dataset["prop"] == col.prop
                                })
                                if (inSelectedListIndex >= 0){
                                    return Object.assign(col,{
                                        order: inSelectedListIndex <= overChildIndex ? inSelectedListIndex : inSelectedListIndex + 1
                                    })
                                }
                            })
                            
                            columns.value = updateColumns
                        }
                    }
                    return;
                }
            }

            columnsHandlers.clone.classList.remove("nodeActive")
            let updateColumns = columns
            updateColumns[selectedColumnIndex].isDisplayed = !(columnsHandlers.originalList == "available")
            columns.value = updateColumns
        }
    }
    const columnManagementMouseUpEvent = (event)=>{
        columnsHandlers.isDragMode = false
        if (columnsHandlers.clone){
            columnsHandlers.clone.remove()
        }
        columnsHandlers.clone = null as unknown as HTMLDivElement
    }

    onBeforeMount(() => {
        window.addEventListener("mousedown",columnManagementMouseDownEvent)
        window.addEventListener("mousemove",columnManagementMouseMoveEvent)
        window.addEventListener("mouseup",columnManagementMouseUpEvent)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("mousedown",columnManagementMouseDownEvent)
        window.removeEventListener("mousemove",columnManagementMouseMoveEvent)
        window.removeEventListener("mouseup",columnManagementMouseUpEvent)
    })

    let sortByOrder = (a,b)=>{
        return a.order < b.order ? -1 : 1
    }
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

//Popup context
.manageColumnsContainer{
    display: flex;
    flex-direction: row;
    border-top: 1px solid var(--divider);
    >.manageColumnsSection{
        height: 100%;
        width: 100%;
        >.manageColumnsLabel{
            padding: 16px;
        }
        >.manageColumnsSearchForm{
            padding: 0px 16px;
        }
        >.manageColumnsList{
            padding: 16px;
            display: grid;
            grid-gap: 2px;
            >.manageColumnItem{
                padding: 8px 10px;
                border: 1px solid var(--divider);
                border-radius: 6px;
                >.manageColumnItemLabel{
                    @include label;
                }
            }
        }
        &:not(:last-child){
            border-right: 1px solid var(--divider);
        }
    }
}
.manageColumnItemClone{
    padding: 8px 10px;
    border: 1px solid var(--divider);
    border-radius: 6px;
    @include label;
    background-color:var(--background);
    position: absolute;
    z-index: 12;
    animation: ghost-node-in 0.2s ease-in-out forwards;
    &.nodeActive{
        animation: ghost-node-dissapear cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s 1;
        animation-fill-mode: forwards;
    }
}
</style>