<script setup lang="ts">
</script>

<template>
  <div class="detailsViewContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
    .detailsViewContainer{
        width: 100%;
        display: grid;
        grid-gap: 12px;
    }
</style>
