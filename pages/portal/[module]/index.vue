<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default>
            {{
              /**Use as fallback translation, $te checks if translation exists */
              $te(`${module}.title`)
                ? $t(`${module}.title`)
                : $t(`default.list.title`)
            }}
          </template>
          <template #description>
            {{
              $te(`${module}.description`)
                ? $t(`${module}.description`)
                : $t(`default.list.description`)
            }}
          </template>
          <template #actions>
            <NuxtLink :to="`/portal/${module}/create`">
              <component :is="button" type="primary">
                {{
                  $te(`${module}.list.create`)
                    ? $t(`${module}.list.create`)
                    : $t(`default.list.create`)
                }}
              </component>
            </NuxtLink>
          </template>
        </component>
        <component :is="widgets" />
        <component :is="list" :columns="columns" :data="data" />
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
const context = resolveComponent("LayoutContext");
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");
const widgets = resolveComponent("Widgets");
const list = resolveComponent("ViewList");
const button = resolveComponent("Button");

const route = useRoute();
const app = useNuxtApp();
const i18n = useI18n();

const module = computed((): string => {
  return (route.params?.module as string) ?? "";
});

const controller = computed((): any => {
  return app.$vertex.modules[module.value] ?? null;
});

const columns = computed(() => {
  if (controller.value) {
    return controller.value.listColumns.map((column) => {
      column = {
        ...column,
        label: i18n.te(column.label)
          ? column.label
          : `default.fields.${column.prop}`,
      };
      //Check if column marked as primary and add link
      if (column.primary === true) {
        column.to = column.to || `/portal/${module.value}/{${column.prop}}`;
      }
      return column;
    });
  }
});

const data = ref([]);

watch(
  controller,
  () => {
    controller.value?.getEntries
      .bind(this)
      .call(this)
      .then((response: any) => {
        data.value = response;
      });
  },
  {
    immediate: true,
  }
);
</script>
