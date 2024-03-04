<template>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th class="hiddenCell"></th>
                    <th v-for="column in selectedColumns" :key="column.prop">{{column.label}}</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
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
    @import "assets/style/mixins.scss";
    .tableContainer{
        width: 100%;
        border-spacing: 0px;
        text-align: left;
        background-color: var(--fill-primary);
        > table{
            border-spacing: 0px;
            width: 100%;
            border: 1px solid var(--divider);
            border-radius: 6px;
            overflow: hidden;
            > thead{
                > tr{
                    @include label;
                    background-color: var(--fill-secondary);
                    font-size: 13px;
                    >th{
                        font-size: 12px;
                        color: var(--text-secondary);
                        font-weight: 600;
                        border-bottom: 1px solid var(--divider);
                        padding: 12px;
                    }
                }
            }
            > tbody{
                > tr{
                    font-size: 13px;
                    color: var(--text-primary);
                    > td, > th{
                        font-weight: normal;
                        padding: 12px;
                    }
                    &:nth-child(odd){
                        background-color: var(--fill-primary);
                    }
                    &:nth-child(even){
                        background-color: #F7FAFF;
                    }
                    &:not(:last-child){
                        > td, > th{
                            border-bottom: 1px solid var(--divider);
                        }
                    }
                }
            }
            td, th{
                &.hiddenCell{
                    width: 0px;
                    padding: 0px;
                }
            }
        }
  }
</style>