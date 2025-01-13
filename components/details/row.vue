<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <div class="detailsRowContainer">
    <div class="detailsRowHead">
      <div class="detailsRowLabel">{{ label }}</div>
    </div>
    <div class="detailsRowWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detailsRowContainer {
  width: 100%;
  display: grid;
  grid-gap: 4px;
  > .detailsRowHead {
    > .detailsRowLabel {
      @include label;
      color: var(--text-secondary);
    }
  }
  > .detailsRowWrapper {
    width: 100%;
    display: grid;
    grid-gap: 12px;
  }
}
</style>
