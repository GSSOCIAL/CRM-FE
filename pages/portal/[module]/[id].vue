<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{
              $te(`${module}.view.title`)
                ? $t(`${module}.view.title`, {
                    id: id,
                    title: title,
                  })
                : $t(`default.view.title`, { id: id, title: title })
            }}
          </template>
          <template #description>
            {{
              $te(`${module}.view.description`)
                ? $t(`${module}.view.description`, {
                    id: id,
                    title: title,
                  })
                : $t(`default.view.description`, { id: id, title: title })
            }}
          </template>
          <template #actions> </template>
        </component>
        <component :is="edit" :meta="form" @change="updatePayload"></component>
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
const edit = resolveComponent(vertex.getComponent("ViewEdit"));
const button = resolveComponent(vertex.getComponent("Button"));

const route = useRoute();
const app = useNuxtApp();
const t = useI18n();

const controller = computed((): ModuleConfig => {
  //Get module
  const imports = import.meta.glob("@/modules/custom/resorts/resorts.ts", {
    eager: true,
    import: "default",
  });
  const controllerBuilder = imports[Object.keys(imports)[0]];
  return new controllerBuilder();
});

const module = computed((): string => {
  return (route.params?.module as string) ?? "";
});
const id = computed((): string => {
  return (route.params?.id as string) ?? "";
});
const title = computed((): string => {
  return "";
});

const form = computed(() => {
  if (controller) {
    return controller.value.createForm;
  }
});

const payload = ref({});
const updatePayload = (data) => {
  payload.value = { ...payload.value, ...data.value };
};
const update = () => {
  if (controller) {
    //Create controller function should act as Promise to lock page state, in response boolean or id expected
    controller.value.create({ ...payload.value }).then((response) => {
      app.hooks.callHook("toast:message", {
        message: t.te(`${route.params?.module}.create.success-toast`)
          ? t.t(`${route.params?.module}.create.success-toast`)
          : t.t("default.create.success-toast"),
        type: "note",
        dismissible: false,
      });
    });
  }
};
</script>
