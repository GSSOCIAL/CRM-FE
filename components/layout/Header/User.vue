<template>
  <div class="applicationLayoutHeaderUserWrapper">
    <div class="applicationLayoutHeaderUser">
      <div class="applicationLayoutHeaderUserAvatar">
        <div class="applicationLayoutHeaderUserAvatarWrapper">AA</div>
      </div>
      <div class="applicationLayoutHeaderUserDetails">
        <div class="applicationLayoutHeaderUserDetailsUserName">Alaska</div>
        <div class="applicationLayoutHeaderUserDetailsRole">Role</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.applicationLayoutHeaderUser {
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 6px;
  &Wrapper {
  }
  &Avatar {
    width: 100%;
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
    &Wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--Fill-Secondary);
      @include text("headline");
    }
  }
  &Details {
    display: grid;
    grid-gap: 0px;
    &UserName {
      @include text("body");
    }
    &Role {
      @include text("headline");
      color: var(--Text-On-Fill-Tertiary);
    }
  }
}
</style>