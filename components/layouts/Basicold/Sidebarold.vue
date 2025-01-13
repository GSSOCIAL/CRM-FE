<template>
  <div class="applicationLayoutBasicSidebarWrapper">
    <div class="applicationLayoutBasicSidebar">
      <component :is="branding" />
      <div class="applicationLayoutBasicSidebarNavigationContainer">
        <component :is="navigation" :items="sidebarNavigation" />
      </div>
      <div class="applicationLayoutBasicSidebarActionsContainer">
        <component :is="actions" :items="actionsNavigation" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const branding = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarBranding")
);
const navigation = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarNavigation")
);
const actions = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarActions")
);

const sidebarNavigation = vertex.getNavigation("sidebar")?.items ?? [];
const actionsNavigation = vertex.getNavigation("sidebar-actions")?.items ?? [];
</script>

<style lang="scss">
.applicationLayoutBasicSidebar {
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--Fill-Divider);
  background-color: var(--Fill-Sidebar);
  color: var(--Text-On-Fill-Sidebar);
  display: flex;
  flex-direction: column;
  &Wrapper {
    width: 100%;
    max-width: 280px;
    min-height: 100vh;
  }
  &NavigationContainer {
    height: 100%;
    flex: 1;
  }
  &ActionsContainer {
  }
}
body[sidebar="closed"] {
  .applicationLayoutBasicSidebar {
    &Wrapper {
      max-width: calc(40px + var(--padding) * 2);
    }
  }
}
</style>
