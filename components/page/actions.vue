<script setup lang="ts">
</script>

<template>
  <div class="pageActionsContainer">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .pageActionsContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    >*:not(:last-child){
        margin-right: 6px;
    }
  }
</style>