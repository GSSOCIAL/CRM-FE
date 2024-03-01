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
        background-color: var(--section);
        > table{
            > thead{
                height: 45px;
                > tr{
                    @include label;
                    background-color: var(--secondary);
                    >th{
                        font-size: 12px;
                        color: var(--lightGray);
                        font-weight: 600;
                        border-bottom: 1px solid var(--divider);
                    }
                }
            }
            > tbody{
                > tr{
                    > td, > th{

                    }
                }
            }
            td, th{
                &.hiddenCell{
                    width: 0px;
                }
            }
        }
  }
</style>