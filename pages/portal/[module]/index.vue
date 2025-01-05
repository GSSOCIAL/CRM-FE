<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{
              /**Use as fallback translation, $te checks if translation exists */
              $te(`${route?.params?.module}.title`)
                ? $t(`${route?.params?.module}.title`)
                : $t(`default.list.title`)
            }}
          </template>
          <template #description>
            {{
              $te(`${route?.params?.module}.description`)
                ? $t(`${route?.params?.module}.description`)
                : $t(`default.list.description`)
            }}
          </template>
          <template #actions>
            <NuxtLink :to="`/portal/${route?.params?.module}/create`">
              <component :is="button" type="primary">
                {{
                  $te(`${route?.params?.module}.list.create`)
                    ? $t(`${route?.params?.module}.list.create`)
                    : $t(`default.list.create`)
                }}
              </component>
            </NuxtLink>
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
const button = resolveComponent(vertex.getComponent("Button"));

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
