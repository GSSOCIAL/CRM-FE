<template>
  <div class="container"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  flex: 1;
  background-color: var(--fill-section);
}
</style>
