<template>
  <div class="applicationLayoutGrid">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.applicationLayoutGrid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
}
</style>
