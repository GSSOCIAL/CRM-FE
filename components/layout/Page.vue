<template>
  <div class="applicationLayoutPage">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.applicationLayoutPage {
  width: 100%;
  height: 100%;
  padding: 0px 0px calc(var(--padding) * 1);
}
</style>
