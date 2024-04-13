<template>
  <div class="authLayoutContainer">
    <div class="authLayoutForm">
      <NuxtPage />
    </div>
    <div class="authLayoutGreetings"></div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";
.authLayoutContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: var(--fill-primary);
  > .authLayoutForm {
    width: 50%;
  }
  > .authLayoutGreetings {
    background-color: var(--fill-secondary);
    width: 50%;
  }
}
</style>
