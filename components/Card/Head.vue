<template>
  <div class="cardHead">
    <div class="cardHeadIcon">
      <slot name="icon"></slot>
    </div>
    <div class="cardHeadLabel">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.cardHead {
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 6px;
  &Icon {
  }
  &Label {
    @include text("subhead");
    color: var(--Text-On-Fill-Primary);
  }
}
</style>
