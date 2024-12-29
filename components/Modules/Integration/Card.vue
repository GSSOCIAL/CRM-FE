<template>
  <component :is="card">
    <component :is="head">
      <template #default>Telegram</template>
    </component>
    <p>Telegram integration enables messaging and bot functions in your app.</p>
  </component>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const card = resolveComponent(vertex.getComponent("Card"));
const head = resolveComponent(vertex.getComponent("CardHead"));
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.globalSearchWrapper {
  width: 100%;
}
</style>
