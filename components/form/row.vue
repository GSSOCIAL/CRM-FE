<script setup lang="ts">
</script>

<template>
  <div class="formRow">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
    .formRow{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 12px;
    }
</style>
