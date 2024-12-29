<template>
  <div class="globalSearchWrapper">
    <component :is="field" :placeholder="$t('fields.search')" />
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const field = resolveComponent(vertex.getComponent("Field"));
</script>

<style lang="scss">
.globalSearchWrapper {
  width: 100%;
}
</style>
