<template>
    <tr>
        <th class="hiddenCell"></th>
        <th v-for="column in selectedColumns" :key="column.prop"></th>
    </tr>
</template>

<script setup lang="ts">
    const props = defineProps({
        columns: {
            type: Array,
            default: [],
            required: true
        }
    })
    const {columns} = props
    const selectedColumns = columns.filter((column)=>{
        if (column?.isDisplayed == true) return true
        if (column?.isDisplayed == false) return false
        if (column?.isDefaultColumn == false) return false
        return true
    })
</script>

<style lang="scss">
</style>