<template>
  <div class="viewList">
    <component :is="table" :columns="columns" :data="data" />
    <component :is="pagination" />
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const table = resolveComponent(vertex.getComponent("TableBuilder"));
const pagination = resolveComponent(vertex.getComponent("TablePagination"));

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
</script>

<style lang="scss">
.viewList {
  width: 100%;
}
</style>
