<template>
  <NuxtLayout>
    <NuxtPage page-key="subpage" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { LayoutKey } from "#build/types/layouts";

const app = useNuxtApp();
const layout = ref("basic" ?? app.$vertex.layout);

definePageMeta({
  layout: layout.value as LayoutKey,
});
onBeforeMount(() => {
  //app.$vertex.setup()
});
app.hook("layout:change", (name) => {
  layout.value = name;
});
</script>

<style lang="scss" scoped></style>
