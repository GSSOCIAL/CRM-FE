<template>
  <div class="tableContainer">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.prop">
            {{ $t(column.label) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <td v-for="column in columns" :key="`${i}_${column.prop}`">
            {{ row[column.prop] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  columns: {
    type: Array,
    required: false,
    default: [],
  },
  data: {
    type: Array,
    required: false,
    default: [],
  },
});

const { columns, data } = props;
const rows = computed(() => {
  return [...data].map((row) => {
    return row;
  });
});
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.tableContainer {
  width: 100%;
  border-spacing: 0px;
  text-align: left;
  background-color: var(--Fill-Primary);
  color: var(--Text-On-Primary);
  > table {
    border-spacing: 0px;
    width: 100%;
    border: 1px solid var(--Fill-Divider);
    overflow: hidden;
    > thead {
      > tr {
        > th {
          border-bottom: 1px solid var(--Fill-Divider);
          color: var(--Text-On-Fill-Tertiary);
          @include text("headline");
        }
      }
    }
    > tbody {
      > tr {
        > td,
        > th {
          @include text("body");
        }
        &:nth-child(odd) {
        }
        &:nth-child(even) {
        }
        &:not(:last-child) {
          > td,
          > th {
            border-bottom: 1px solid var(--Fill-Divider);
          }
        }
      }
    }
    td,
    th {
      &.hiddenCell {
        width: 0px;
        padding: 0px;
      }
    }
  }
}
</style>
