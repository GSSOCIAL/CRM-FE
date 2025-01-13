<template>
  <component :is="wrapper">
    <component :is="page">
      <component :is="heading">
        <template #default>
          {{ $t("integrations.title") }}
        </template>
        <template #description>
          {{ $t("integrations.description") }}
        </template>
      </component>
      <component :is="grid">
        <component :is="integration" />
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");
const grid = resolveComponent("LayoutGrid");
const integration = resolveComponent("ModulesIntegrationCard");
</script>
