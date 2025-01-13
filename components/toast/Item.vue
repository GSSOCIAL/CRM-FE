<template>
  <div
    class="toastItem"
    :class="{
      dismissible: dismissible,
    }"
    :style="message.styles"
  >
    <div class="toastItemIcon">
      <component
        :is="icon"
        class="toastItemIconContainer"
        :icon="iconName"
        size="small"
        :theme="style"
      />
    </div>
    <div class="toastItemMessage">{{ message.message }}</div>
    <div
      v-if="dismissible"
      class="toastItemCross"
      @click="
        () => {
          close();
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
const icon = resolveComponent("Icon");

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["click", "close"]);
const close = () => {
  emit("close");
};
const iconName = computed(() => {
  if (props.message.icon) {
    return props.message.icon;
  }
  switch (props.message.type) {
    case "success":
      return "clipboardTick";
    case "danger":
      return "clipboardClose";
    case "fail":
      return "error";
    case "create":
      return "edit";
    case "warning":
      return "warning";
    case "note":
      return "notification";
    case "info":
      return "infoCircle";
    case "help":
      return "help";
    case "delete":
      return "trash";
    default:
      return "notification";
  }
});
const style = computed(() => {
  switch (props.message.type) {
    case "success":
    case "create":
      return "active";
    case "danger":
    case "fail":
    case "delete":
    case "warning":
      return "danger";
    case "note":
    case "info":
    case "help":
      return "primary";
    default:
      return "light";
  }
});

const dismissible = computed((): boolean => {
  return typeof props.message.dismissible != "undefined"
    ? props.message.dismissible
    : true;
});
</script>

<style lang="scss" scoped>
.toastItem {
  padding: 8px 10px;
  z-index: 0;
  display: grid;
  grid-template-columns: 22px 1fr;
  grid-gap: 12px;
  color: #384254;
  @include text("body");
  width: 300px;

  animation-name: toastIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 1.5, 0.5, 1);
  align-items: center;

  &.wide {
    width: 600px;
  }
  &.dismissible {
    grid-template-columns: 22px 1fr 26px;
  }
  &Icon {
    display: flex;
    align-items: center;
    justify-content: center;
    &Container {
      &:deep(.notification) {
        overflow: visible;
      }
      &:deep(.notification .bell-main) {
        animation: ring 10s linear infinite;
        transform-origin: 9.5px 2.4781px;
      }
      &:deep(.notification .bell-2) {
        animation: ding 10s linear infinite;
      }
    }
  }
  &Message {
  }
  &Cross {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 14px;
      height: 2px;
      background-color: #000;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

@keyframes toastIn {
  0% {
    transform: translate3d(0, -120px, 0) scaleY(0.8);
    visibility: visible;
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
  }

  1.5% {
    transform: rotate(30deg);
  }

  2.5% {
    transform: rotate(-25deg);
  }

  3.75% {
    transform: rotate(20deg);
  }

  5.15% {
    transform: rotate(-10deg);
  }

  6.65% {
    transform: rotate(5deg);
  }

  8.0% {
    transform: rotate(-2deg);
  }

  10.0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
@keyframes ding {
  0% {
    transform: translateX(0);
  }

  1.2% {
    transform: translateX(4px);
  }

  1.5% {
    transform: translateX(4px);
  }

  2.3% {
    transform: translateX(-4px);
  }

  2.5% {
    transform: translateX(-4px);
  }

  3.55% {
    transform: translateX(4px);
  }

  3.75% {
    transform: translateX(4px);
  }

  5.45% {
    transform: translateX(-3px);
  }

  7.15% {
    transform: translateX(2px);
  }

  9.0% {
    transform: translateX(-1px);
  }

  11.0% {
    transform: translateX(0);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
