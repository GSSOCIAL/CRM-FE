<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.card {
  width: 100%;
  padding: var(--padding);
  background-color: var(--Fill-Secondary);
  color: var(--Text-On-Fill-Secondary);
  > p {
    margin: 0px;
    padding: calc(var(--padding) / 2) 0px;
  }
}
</style>
