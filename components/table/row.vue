<template>
    <tr>
        <th class="hiddenCell"></th>
        <th v-for="column in selectedColumns" :key="column.prop">
            {{data[column.prop]}}
        </th>
    </tr>
</template>

<script setup lang="ts">
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        },
        data:{
            type: Object,
            default: {},
            required: true
        }
    })
    const {columns} = props
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

    let sortByOrder = (a,b)=>{
        return a.order < b.order ? -1 : 1
    }
</script>

<style lang="scss">
</style>