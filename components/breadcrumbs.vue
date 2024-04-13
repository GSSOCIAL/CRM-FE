<template>
  <div class="breadCrumbsContainer">
    <nuxt-link :to="PlatformRoute">
      <BreadcrumbItem>{{ $t("dashboard.home") }}</BreadcrumbItem>
    </nuxt-link>
    <nuxt-link
      :to="`${PlatformRoute}${prop.url}`"
      v-for="prop in path"
      :key="prop.url"
    >
      <BreadcrumbItem>{{ prop.label }}</BreadcrumbItem>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { PlatformRoute } from "@/helpers/constants";

const props = defineProps({
  path: {
    type: Array,
    required: true,
    default: () => {
      [];
    },
  },
});
</script>

<style scoped lang="scss">
.breadCrumbsContainer {
  width: 100%;
  padding: 48px 0px 12px;
  display: flex;
  flex-direction: row;
  > * {
    text-decoration: none;
  }
  > *:not(:last-child) {
    margin-right: 14px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -10px;
      top: calc(50% - 3px);
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: var(--divider);
    }
  }
}
</style>
