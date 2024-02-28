<template>
    <tr>
        <th class="hiddenCell"></th>
        <th v-for="column in columns" :key="column.prop"></th>
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
</script>

<style lang="scss">
</style>