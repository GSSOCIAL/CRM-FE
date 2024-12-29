<template>
  <div class="applicationLayoutBasicSidebarBranding">
    <div class="applicationLayoutBasicSidebarBrandingLogo">
      <component :is="logo" />
    </div>
    <div
      class="applicationLayoutBasicSidebarBrandingAction"
      :title="$t('sidebar.actions.collapse')"
    >
      <component :is="collapseButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const { t } = useI18n();
const collapseButton = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarCollapse")
);
const logo = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebarLogo")
);
</script>

<style lang="scss">
.applicationLayoutBasicSidebarBranding {
  width: 100%;
  border-bottom: 1px solid var(--Fill-Divider);
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-gap: 6px;
  padding: var(--padding);
  height: calc(40px + var(--padding) * 2);
  align-items: center;
  &Logo {
  }
  &Action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
body[sidebar="closed"] {
  .applicationLayoutBasicSidebarBranding {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &Logo {
      display: none;
    }
  }
}
</style>
