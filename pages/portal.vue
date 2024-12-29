<template>
  <NuxtLayout name="themes-basic-portal">
    <NuxtPage page-key="subpage" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const defaultLayout = vertex.getLayout();

const setupLayout = () => {
  setPageLayout(`themes-${defaultLayout.toLowerCase()}-portal`);
};

definePageMeta({
  layout: false,
});
onBeforeMount(() => {
  setupLayout();
  vertex.mount();
});
</script>

<style lang="scss" scoped>
</style>