<template>
    <div class="tableFiltersContainer">
        <div class="appliedFiltersContainer"></div>
        <div class="tableActionsContainer">
            <Button size="small" type="clean" @click="()=>{
                isColumnsManagePopupShowed = true
            }">Manage Columns</Button>
        </div>
    </div>
    <Popup v-if="isColumnsManagePopupShowed" @close="()=>{
        isColumnsManagePopupShowed = false
    }">Hello World</Popup>
</template>

<script setup lang="ts">
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        }
    })

    const isColumnsManagePopupShowed = useState('isColumnsManagePopupShowed', () => false)

</script>

<style lang="scss">
  .tableFiltersContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    >.appliedFiltersContainer{
        width: 100%;
        flex: 1;
    }
    >.tableActionsContainer{}
  }
</style>