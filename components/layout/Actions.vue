<template>
  <div class="layoutActionsWrapper">
    <component :is="wrapper">
      <div class="layoutActions">
        <div class="layoutActionsSidebar">
          <slot name="actions" />
        </div>
        <div class="layoutActionsContext">
          <slot />
        </div>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const wrapper = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutWrapper")
);
</script>

<style lang="scss" scoped>
.layoutActions {
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100%;
  flex: 1;
  &Wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  &Sidebar {
    padding: var(--padding);
    min-height: 100%;
    display: flex;
    flex-direction: row;
  }
  &Context {
    width: 100%;
    flex: 1;
    background: var(--Fill-Background);
    padding: var(--padding);
  }
}
</style>