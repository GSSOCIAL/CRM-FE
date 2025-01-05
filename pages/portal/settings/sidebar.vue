<template>
  <component :is="wrapper">
    <component :is="page">
      <component :is="heading">
        <template #default>
          {{ $t("sidebar.title") }}
        </template>
        <template #description>
          {{ $t("sidebar.description") }}
        </template>
      </component>
      <component :is="list" :columns="columns" :data="modules" />
    </component>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const { t } = useI18n();
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const page = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
const list = resolveComponent(vertex.getComponent("ViewList"));

const columns = [
  {
    prop: "module",
    label: t("modules.listColumns.module"),
  },
];

const modules = computed(() => {
  let output = [
    {
      key: "dashboard",
      module: "Dashboard",
    },
  ];
  output = [
    ...output,
    ...vertex.getModules().map((id: string) => {
      return {
        module: t(`modules.${id}.module`),
      };
    }),
  ];

  return output;
});
</script>
