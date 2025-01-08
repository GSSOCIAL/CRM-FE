<template>
  <NuxtLayout :name="`themes-${layout}-portal`">
    <NuxtPage page-key="subpage" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";

const layout = ref(vertex.getLayout());
const app = useNuxtApp();

const setupLayout = () => {
  setPageLayout(`themes-${layout.value}-portal`);
};

definePageMeta({
  layout: false,
});
onBeforeMount(() => {
  setupLayout();
  vertex.mount();
  app.$theme.load();
});

app.hook("layout:change", (name) => {
  layout.value = name;
  localStorage.setItem("layout", name);
  document.body.setAttribute("layout", name);
});
app.hook("colorScheme:change", (name) => {
  app.$theme.set(name);
});
</script>

<style lang="scss" scoped></style>
