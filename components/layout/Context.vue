<template>
  <div class="applicationLayoutContext">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.applicationLayoutContext {
  width: 100%;
  height: 100%;
  background: var(--Fill-Background);
}
</style>
