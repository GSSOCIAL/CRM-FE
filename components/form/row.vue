<script setup lang="ts">
const props = defineProps({
  columns: {
    type: Number,
    default: 2,
    required: false,
  },
});
</script>

<template>
  <div
    class="formRow"
    :class="{ [`columns${columns}`]: true }"
    :style="{
      'grid-template-columns': columns != 2 ? `repeat(${columns},1fr)` : '',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.formRow {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  padding-bottom: 12px;
}
</style>
