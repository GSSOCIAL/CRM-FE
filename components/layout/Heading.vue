<template>
  <div class="applicationLayoutHeading">
    <div class="applicationLayoutHeadingLabel">
      <slot></slot>
    </div>
    <div class="applicationLayoutHeadingDescription">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.applicationLayoutHeading {
  width: 100%;
  display: grid;
  flex-direction: column;
  padding: var(--padding) 0px;
  gap: 0px;
  &Label {
    @include text("title");
    color: var(--Text-On-Fill-Primary);
    width: 100%;
  }
  &Description {
    @include text("body");
    color: var(--Text-On-Fill-Secondary);
    width: 100%;
  }
}
</style>
