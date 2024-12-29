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
import vertex from "vertex-admin";
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const page = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
const grid = resolveComponent(vertex.getComponent("LayoutGrid"));
const integration = resolveComponent(
  vertex.getComponent("ModulesIntegrationCard")
);
</script>
