<template>
  <div class="applicationLayoutHeading">
    <div class="applicationLayoutHeadingWrapper">
      <div class="applicationLayoutHeadingLabel">
        <slot></slot>
      </div>
      <div class="applicationLayoutHeadingDescription">
        <slot name="description"></slot>
      </div>
    </div>
    <div class="applicationLayoutHeadingActions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.applicationLayoutHeading {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: var(--padding) 0px;
  gap: 20px;
  align-items: flex-end;
  &Wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
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
  &Actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
  }
}
</style>
