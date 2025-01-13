<template>
  <component :is="card">
    <component :is="head">
      <template #default>Telegram</template>
    </component>
    <p>Telegram integration enables messaging and bot functions in your app.</p>
  </component>
</template>

<script setup lang="ts">
const card = resolveComponent("Card");
const head = resolveComponent("CardHead");
</script>

<style lang="scss">
.globalSearchWrapper {
  width: 100%;
}
</style>
