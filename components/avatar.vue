<template>
  <div class="userAvatar" :class="{ [`name${userFillIndex}`]: true }">
    <span>{{ userShortName }}</span>
  </div>
</template>

<script setup lang="ts">
const { $makeIconContents, $getColor } = useNuxtApp();

const props = defineProps({
  userName: {
    type: String,
    default: "",
    required: true,
  },
});

/**
 * Cut user name to 1-2 symbols
 */
const userShortName = computed(() => {
  return $makeIconContents(props.userName);
});
/**
 * User fill style
 */
const userFillIndex = computed(() => {
  return props.userName[0];
});
/**
 * Blur 1 color
 */
const blurAColor = computed(() => {
  return $getColor("M");
});
/**
 * Blur 2 color
 */
const blurBColor = computed(() => {
  return $getColor("y");
});
</script>

<style lang="scss">
@import "assets/style/gradients.scss";

.userAvatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;
  > span {
    position: absolute;
    z-index: 3;
  }
  > .blurA,
  > .blurB {
    position: absolute;
    z-index: 1;
  }
  > .blurA {
    background-color: red;
    width: 35px;
    height: 35px;
    filter: blur(15px);
    border-radius: 100%;
    top: -10px;
    left: -10px;
  }
  > .blurB {
    background-color: blue;
    width: 35px;
    height: 35px;
    filter: blur(10px);
    border-radius: 100%;
    bottom: -10px;
    right: -10px;
  }
  &.nameA {
    @include gradientA;
  }
  &.nameB {
    @include gradientB;
  }
  &.nameC {
    @include gradientC;
  }
  &.nameD {
    @include gradientD;
  }
  &.nameE {
    @include gradientE;
  }
  &.nameF {
    @include gradientF;
  }
  &.nameG {
    @include gradientG;
  }
  &.nameH {
    @include gradientH;
  }
  &.nameI {
    @include gradientI;
  }
  &.nameJ {
    @include gradientJ;
  }
  &.nameK {
    @include gradientK;
  }
  &.nameL {
    @include gradientL;
  }
  &.nameM {
    @include gradientM;
  }
  &.nameN {
    @include gradientN;
  }
  &.nameO {
    @include gradientO;
  }
  &.nameP {
    @include gradientP;
  }
  &.nameQ {
    @include gradientQ;
  }
  &.nameR {
    @include gradientR;
  }
  &.nameS {
    @include gradientS;
  }
  &.nameT {
    @include gradientT;
  }
  &.nameU {
    @include gradientU;
  }
  &.nameV {
    @include gradientV;
  }
  &.nameW {
    @include gradientW;
  }
  &.nameX {
    @include gradientX;
  }
  &.nameY {
    @include gradientY;
  }
  &.nameZ {
    @include gradientZ;
  }
}
</style>
