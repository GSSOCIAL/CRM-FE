<template>
    <div class="tableFiltersContainer">
        <div class="appliedFiltersContainer"></div>
        <div class="tableActionsContainer">
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
        },
        filters: {
            type: Array,
            default: [],
            required: false
        },
    })
    const {columns, filters} = props

    const isManageFiltersShowed = useState('isManageFiltersShowed', () => false)
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

.tableFiltersContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 12px 0px;
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