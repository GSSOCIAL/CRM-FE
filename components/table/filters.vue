<template>
    <div class="tableFiltersContainer">
        <div class="appliedFiltersContainer"></div>
        <div class="tableActionsContainer">
            <Button size="small" type="clean" @click="()=>{
                isColumnsManagePopupShowed = true
            }">Manage Columns</Button>
            <div>
                <Button size="small" type="clean" @click="()=>{
                    isManageFiltersShowed = !isManageFiltersShowed
                }">Filters</Button>
                <ManageFilters 
                    v-if="isManageFiltersShowed"
                    :filters="filters" 
                    @close="()=>{
                        isManageFiltersShowed = false
                    }"
                />
            </div>
            <Button size="small" type="clean" @click="()=>{
                isColumnsManagePopupShowed = true
            }">
            Add Entry
            </Button>
        </div>
    </div>

    <Popup v-if="isColumnsManagePopupShowed" @close="()=>{
        isColumnsManagePopupShowed = false
    }">
        <PopupHead @close="()=>{
            isColumnsManagePopupShowed = false
        }">
            <template v-slot:default>Manage Columns</template>
            <template v-slot:description>Select columns you like to see on this dashboard</template>
        </PopupHead>
        <ManageColumns :columns="modifiedColumns"/>
        <PopupActions>
            <Button size="small" type="clean" @click="()=>{
                resetColumns()
            }">Reset to defaults</Button>
            <div class="wrapper"></div>
            <Button size="small" type="clean" @click="()=>{
                dismissColumnsEdit()
            }">Cancel</Button>
            <Button size="small" type="primary" @click="()=>{
                updateColumns()
            }">Save</Button>
        </PopupActions>
    </Popup>
</template>

<script setup lang="ts">
    const nuxtApp = useNuxtApp()
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        },
        filters: {
            type: Array,
            default: [],
            required: false
        },
    })
    const {columns, filters} = props
    const modifiedColumns = useState('modifiedColumns', () => columns)
    const emit = defineEmits(['updateColumns'])

    const isColumnsManagePopupShowed = useState('isColumnsManagePopupShowed', () => false)
    const isManageFiltersShowed = useState('isManageFiltersShowed', () => false)
    
    const resetColumns = ()=>{
        modifiedColumns.value = columns.map((column)=>{
            if (typeof column.isDisplayed != "undefined"){
                delete column.isDisplayed
            }
            return column;
        })
    }
    const dismissColumnsEdit = ()=>{
        modifiedColumns.value = columns
        isColumnsManagePopupShowed.value = false
    }
    const updateColumns = ()=>{
        emit('updateColumns', modifiedColumns.value)
        isColumnsManagePopupShowed.value = false
    }
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

.tableFiltersContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    >.appliedFiltersContainer{
        width: 100%;
        flex: 1;
    }
    >.tableActionsContainer{
        display: flex;
        flex-direction: row;
        &>:not(:last-child){
            margin-right: 6px;
        }
    }
}
</style>