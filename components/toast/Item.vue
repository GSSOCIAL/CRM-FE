<template>
  <div
    class="toastItem"
    :class="{
      dismissible: dismissible,
    }"
    :style="message.styles"
  >
    <div class="toastItemIcon">
      <Icon
        v-if="false"
        class="toastItemIconContainer"
        :icon="icon"
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
const icon = computed(() => {
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
  color: var(--Middle-Gray, #384254);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 300px;

  animation-name: toastIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 1.5, 0.5, 1);
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
</style>
