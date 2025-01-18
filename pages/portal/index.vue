<template>
  <component :is="context">
    <component :is="wrapper">
      <component :is="page">
        <component :is="heading">
          <template #default> </template>
          <template #description> </template>
          <template #actions>
            <component
              :is="button"
              type="clean"
              size="small"
              @click="
                () => {
                  editMode = true;
                }
              "
              v-if="!editMode"
            >
              {{ $t("dashboard.actions.editPage") }}
            </component>
            <component
              :is="button"
              type="secondary"
              size="small"
              @click="dismissWidgets"
              v-if="editMode"
            >
              {{ $t("dashboard.actions.dismiss") }}
            </component>
            <component
              :is="button"
              type="primary"
              size="small"
              @click="saveWidgets"
              v-if="editMode"
            >
              {{ $t("dashboard.actions.save") }}
            </component>
          </template>
        </component>
        <component
          :is="widgets"
          ref="widgetsRef"
          :editMode="editMode"
          :widgets="widgetsData"
        />
      </component>
    </component>
  </component>
</template>

<script setup lang="ts">
const context = resolveComponent("LayoutContext");
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");
const button = resolveComponent("Button");
const widgets = resolveComponent("Widgets");

const widgetsRef = ref(null);
const editMode = ref(false);

const widgetsData = ref([]);

const saveWidgets = () => {
  widgetsRef.value.save();
  editMode.value = false;
};
const dismissWidgets = () => {
  widgetsRef.value.dismiss();
  editMode.value = false;
};
</script>
