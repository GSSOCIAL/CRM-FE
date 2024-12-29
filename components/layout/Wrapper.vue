<template>
  <div class="applicationLayoutWrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.applicationLayoutWrapper {
  width: 100%;
  height: 100%;
  padding: 0px var(--padding);
  max-width: 900px;
  margin: 0px auto;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
