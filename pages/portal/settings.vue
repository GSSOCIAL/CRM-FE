<template>
  <component :is="layout">
    <template #actions>
      <component :is="navigation" :items="items" />
    </template>
    <template #default>
      <NuxtPage page-key="page" />
    </template>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const layout = resolveComponent(vertex.getComponent("LayoutActions"));
const navigation = resolveComponent(vertex.getComponent("Navigation"));
const items = [
  {
    label: "navigation.main",
    items: [
      {
        label: "navigation.appearance",
        route: `/portal/settings/appearance`,
      },
      {
        label: "navigation.modules",
        route: `/portal/settings/modules`,
      },
      {
        label: "navigation.sidebar",
        route: `/portal/settings/sidebar`,
      },
    ],
  },
  {
    label: "navigation.integrations",
    items: [
      {
        label: "navigation.integrations",
        route: `/portal/settings/integrations`,
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
