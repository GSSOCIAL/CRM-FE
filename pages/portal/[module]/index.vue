<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{ $t("contacts.title") }}
          </template>
          <template #description>
            {{ $t("contacts.description") }}
          </template>
        </component>
        <component :is="widgets" />
        <component :is="list" />
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const context = resolveComponent(vertex.getComponent("LayoutContext"));
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const page = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
const widgets = resolveComponent(vertex.getComponent("Widgets"));
const list = resolveComponent(vertex.getComponent("ViewList"));
</script>
