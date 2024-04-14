<template>
  <div class="container"><slot></slot></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 100%;
  flex: 1;
  background-color: var(--fill-section);
  transition:
    0.2s cubic-bezier(0.4, 0, 1, 1) background-color,
    1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) color,
    0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) border-right;
}
</style>
