<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{ $t(`${route?.params?.module}.title`) }}
          </template>
          <template #description>
            {{ $t(`${route?.params?.module}.description`) }}
          </template>
        </component>
        <component :is="widgets" />
        <component :is="list" :columns="columns" :data="rows" />
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
import ModuleConfig from "@/config/index";

const context = resolveComponent(vertex.getComponent("LayoutContext"));
const wrapper = resolveComponent(vertex.getComponent("LayoutWrapper"));
const page = resolveComponent(vertex.getComponent("LayoutPage"));
const heading = resolveComponent(vertex.getComponent("LayoutHeading"));
const widgets = resolveComponent(vertex.getComponent("Widgets"));
const list = resolveComponent(vertex.getComponent("ViewList"));

const route = useRoute();

const controller = computed((): ModuleConfig => {
  //Get module
  const imports = import.meta.glob("@/modules/custom/resorts/resorts.ts", {
    eager: true,
    import: "default",
  });
  const controllerBuilder = imports[Object.keys(imports)[0]];
  return new controllerBuilder();
});

const columns = computed(() => {
  if (controller) {
    return controller.value.columns;
  }
});
const rows = computed(() => {});
</script>
