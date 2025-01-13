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
  <div class="detailsSectionContainer">
    <div class="detailsSectionHead">
      <div class="detailsSectionLabel">{{ label }}</div>
    </div>
    <div class="detailsSectionWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detailsSectionContainer {
  width: 100%;
  display: grid;
  grid-gap: 12px;
  padding-top: 12px;
  > .detailsSectionHead {
    > .detailsSectionLabel {
      font-size: 18px;
    }
  }
  > .detailsSectionWrapper {
    width: 100%;
    display: grid;
    grid-gap: 12px;
  }
}
</style>
