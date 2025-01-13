<template>
  <div class="widgetContainer">
    <div class="widgetHeader">
      <div class="widgetLabel">Delivery</div>
    </div>
    <div class="widgetWrapper"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.widgetContainer {
  width: 100%;
  > .widgetHeader {
    > .widgetLabel {
      @include label;
    }
  }
  > .widgetWrapper {
    width: 100%;
    background-color: var(--field-fill);
    color: var(--field-text);
    border: 1px solid var(--field-outline);
    border-radius: 8px;
  }
}
</style>
