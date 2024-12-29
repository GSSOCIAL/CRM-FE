<template>
  <div class="viewList">
    <component :is="table"></component>
    <component :is="pagination" />
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const table = resolveComponent(vertex.getComponent("TableBuilder"));
const pagination = resolveComponent(vertex.getComponent("TablePagination"));
</script>

<style lang="scss">
.viewList {
  width: 100%;
}
</style>
