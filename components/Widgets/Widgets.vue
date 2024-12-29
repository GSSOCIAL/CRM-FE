<template>
  <div class="widgetsContainer"></div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const button = resolveComponent(vertex.getComponent("Button"));
</script>

<style lang="scss">
.widgetsContainer {
  width: 100%;
}
</style>
