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
        <component
          :is="details"
          :meta="form"
          :data="data"
          @change="updatePayload"
        ></component>
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
const context = resolveComponent("LayoutContext");
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");
const details = resolveComponent("ViewDetails");
const button = resolveComponent("Button");

const route = useRoute();
const app = useNuxtApp();
const i18n = useI18n();

const module = computed((): string => {
  return (route.params?.module as string) ?? "";
});
const id = computed((): string => {
  return (route.params?.id as string) ?? "";
});
const title = computed((): string => {
  return "";
});

const controller = computed((): any => {
  return app.$vertex.modules[module.value] ?? null;
});

/*
const controller1 = computed((): ModuleController => {
  //Retrieve module controllers
  const imports = [
    import.meta.glob("@/modules/*\/meta.ts", {
      eager: true,
      import: "default",
    }),
    import.meta.glob("@/modules/custom/*\/meta.ts", {
      eager: true,
      import: "default",
    }),
  ];
  //Controllers
  let controllers: { [module: string]: ModuleController } = {};
  imports.forEach((paths) => {
    Object.keys(paths).forEach((path) => {
      const builder = paths[path] as any;
      const controller: ModuleController = new builder();
      controllers[controller.name] = controller;
    });
  });

  return controllers[module.value] ?? null;
});
*/

const form = computed(() => {
  if (controller.value) {
    return controller.value.viewForm.map((tab) => {
      return {
        ...tab,
      };
    });
  }
});

const data = ref({});

watch(
  controller,
  () => {
    controller.value?.getEntry
      .bind(this)
      .call(this, id.value)
      .then((response: any) => {
        data.value = response;
      });
  },
  {
    immediate: true,
  }
);
</script>
