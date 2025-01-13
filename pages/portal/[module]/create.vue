<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{
              $te(`${module}.create.title`)
                ? $t(`${module}.create.title`)
                : $t(`default.create.title`)
            }}
          </template>
          <template #description>
            {{
              $te(`${module}.create.description`)
                ? $t(`${module}.create.description`)
                : $t(`default.create.description`)
            }}
          </template>
          <template #actions>
            <NuxtLink :to="`/portal/${module}/`">
              <component :is="button" type="secondary">{{
                $te(`${module}.create.cancel`)
                  ? $t(`${module}.create.cancel`)
                  : $t(`default.create.cancel`)
              }}</component>
            </NuxtLink>
            <component :is="button" type="primary" @click="update">{{
              $te(`${module}.create.save`)
                ? $t(`${module}.create.save`)
                : $t(`default.create.save`)
            }}</component>
          </template>
        </component>
        <component :is="edit" :meta="form" @change="updatePayload"></component>
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
import ModuleConfig, { ModuleController } from "@/config/index";

const context = resolveComponent("LayoutContext");
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");
const edit = resolveComponent("ViewEdit");
const button = resolveComponent("Button");

const route = useRoute();
const app = useNuxtApp();
const t = useI18n();

const module = computed((): string => {
  return (route.params?.module as string) ?? "";
});

const controller = computed((): any => {
  return app.$vertex.modules[module.value] ?? null;
});

const form = computed(() => {
  if (controller.value) {
    return controller.value.createForm;
  }
});

const payload = ref({});
const updatePayload = (data: any) => {
  payload.value = { ...payload.value, ...data.value };
};

const update = () => {
  if (controller.value) {
    //Create controller function should act as Promise to lock page state, in response boolean or id expected
    controller.value.createEntry({ ...payload.value }).then((response: any) => {
      app.hooks.callHook("toast:message", {
        message: t.te(`${module.value}.create.success-toast`)
          ? t.t(`${module.value}.create.success-toast`)
          : t.t("default.create.success-toast"),
        type: "note",
        dismissible: false,
      });

      navigateTo(`/portal/${module.value}/${response?.id}`);
    });
  }
};
</script>
