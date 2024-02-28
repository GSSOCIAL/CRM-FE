<template>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th class="hiddenCell"></th>
                    <th v-for="column in columns" :key="column.prop">{{column.label}}</th>
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
</script>

<style lang="scss">
  .tableContainer{
    width: 100%;
    border-spacing: 0px;
    text-align: left;
    background-color: var(--section);
    > table{
        > thead{
            height: 45px;
            > tr{
                font-family: "Roboto Condensed", sans-serif;
                font-optical-sizing: auto;
                font-weight: 500;
                font-style: normal;
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