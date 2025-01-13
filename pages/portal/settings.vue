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
const layout = resolveComponent("LayoutActions");
const navigation = resolveComponent("Navigation");

const items = [
  {
    label: "navigation.main",
    items: [
      {
        label: "navigation.appearance",
        route: `/portal/settings/appearance`,
      },
      {
        label: "navigation.regional",
        route: `/portal/settings/regional`,
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
