<template>
  <NuxtPage page-key="page" />
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const layout = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
</script>

<style lang="scss" scoped>
</style>