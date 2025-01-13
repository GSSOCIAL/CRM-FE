<template>
  <NuxtLayout>
    <NuxtPage page-key="subpage" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const app = useNuxtApp();
const layout = ref(app.$vertex.layout);

definePageMeta({
  layout: "basic",
});
onBeforeMount(() => {
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
