<template>
  <div class="applicationLayoutBasic">
    <div class="applicationLayoutBasicContext">
      <div class="applicationLayoutBasicContent">
        <NuxtPage />
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
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
