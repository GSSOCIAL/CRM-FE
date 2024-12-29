<template>
  <component :is="wrapper">
    <component :is="page">
      <component :is="heading">
        <template #default>
          {{ $t("appearance.title") }}
        </template>
        <template #description>
          {{ $t("appearance.description") }}
        </template>
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const page = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
</script>
