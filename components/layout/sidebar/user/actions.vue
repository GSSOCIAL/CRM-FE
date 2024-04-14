<template>
  <div class="sidebarUserProfileDropdown" :data-id="id">
    <div class="sidebarUserProfile">
      <Avatar :userName="'Mykhailo'" />
      <div class="userDetails">
        <div class="userUserName">Mykhailo</div>
        <div class="userUserRole">Admin</div>
      </div>
    </div>
    <div class="sidebarUserProfileActions">
      <div class="sidebarUserProfileSection">
        <Button>Logout</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const { $makeid } = useNuxtApp();

const emit = defineEmits(["close"]);
const id = $makeid();

const listenerDropdownHide = (event) => {
  if (event?.target && event.target.closest(".sidebarUserProfileDropdown")) {
    const target = event.target.closest(".sidebarUserProfileDropdown");
    if (target.dataset?.id == id) return;
  }
  emit("close");
};
onMounted(() => {
  window.addEventListener("mousedown", listenerDropdownHide);
});
onUnmounted(() => {
  window.removeEventListener("mousedown", listenerDropdownHide);
});
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.sidebarUserProfileDropdown {
  background-color: var(--fill-dropdown);
  position: absolute;
  padding: 24px;
  z-index: 3;
  border-radius: 6px;
  top: 48px;
  min-width: 100%;
  > .sidebarUserProfile {
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    grid-gap: 12px;
    cursor: pointer;
    > .userAvatar {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background-color: var(--area-placeholder-fill);
    }
    > .userDetails {
      > .userUserName {
        font-size: 16px;
        font-weight: 500;
      }
      > .userUserRole {
        @include label;
        font-size: 12px;
        font-weight: 400;
        color: var(--text-secondary);
      }
    }
  }
  > .sidebarUserProfileActions {
    padding-top: 12px;
    > .sidebarUserProfileSection {
      padding: 6px 0px;
      &:not(:last-child) {
        border-bottom: 1px solid var(--divider);
      }
    }
  }
}
</style>
