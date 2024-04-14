<script setup lang="ts">
const { $theme } = useNuxtApp();
$theme.load();
</script>

<template>
  <div class="applicationLayout">
    <LayoutSidebar />
    <div class="applicationLayoutContent">
      <LayoutHeader />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
.applicationLayout {
  display: flex;
  flex-direction: row;
  > .applicationLayoutSidebar {
  }
  > .applicationLayoutContent {
    width: 100%;
    min-height: 100vh;
  }
}
</style>