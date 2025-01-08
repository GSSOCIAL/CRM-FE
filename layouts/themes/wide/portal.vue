<template>
  <div class="applicationLayoutBasic">
    <component :is="sidebar" />
    <div class="applicationLayoutBasicContext">
      <component :is="header" />
      Wide layout
      <div class="applicationLayoutBasicContent">
        <NuxtPage />
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";

const sidebar = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicSidebar")
);
const header = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutsBasicHeader")
);
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
@import "@/assets/style/layouts/basic/main.scss";
.application {
  &LayoutBasic {
    width: 100%;
    min-height: 100vh;
    margin: 0px;
    background: var(--Fill-Background);
    color: var(--Text-On-Fill-Background);
    @include text("body");
    display: flex;
    flex-direction: row;
    &Context {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
    }
    &Content {
      height: 100%;
    }
  }
}
</style>
