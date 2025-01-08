<template>
  <div class="applicationLayoutBasicSidebarActionsWrapper">
    <div class="applicationLayoutBasicSidebarActions">
      <component :is="navigation" :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const { t } = useI18n();

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const navigation = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarNavigation")
);
</script>

<style lang="scss">
.applicationLayoutBasicSidebarActions {
  width: 100%;
  height: 100%;
  &Wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
