<script setup lang="ts">
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        }
    })
    const {columns} = props
    
    const modifiedColumns = useState('modifiedColumns', () => columns)
    const emit = defineEmits(['updateColumns'])

    const isColumnsManagePopupShowed = useState('isColumnsManagePopupShowed', () => false)
    
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

<template>
    <Button size="small" type="clean" @click="()=>{
        isColumnsManagePopupShowed = true
    }">Manage Columns</Button>
    <Button type="clean" size="small" @click="()=>{
      editMode = true;
    }">Edit Page</Button>

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