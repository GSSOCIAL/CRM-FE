<script setup lang="ts">
</script>

<template>
  <div class="formBuilderContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
    .formBuilderContainer{
        width: 100%;
        display: grid;
        grid-gap: 12px;
    }
</style>
