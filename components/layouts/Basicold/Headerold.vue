<template>
  <div class="applicationLayoutBasicHeaderWrapper">
    <component :is="wrapper">
      <div class="applicationLayoutBasicHeader">
        <div class="applicationLayoutBasicHeaderSearch">
          <component v-if="vertex.is('globalSearch')" :is="globalSearch" />
        </div>
        <div></div>
        <div class="applicationLayoutBasicHeaderActions">
          <component :is="actions" />
        </div>
        <div class="applicationLayoutBasicHeaderUser">
          <component :is="user" />
        </div>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
const wrapper = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutWrapper")
);
const globalSearch = resolveComponent(
  vertex.getCustomLayoutComponent("GlobalSearch")
);
const actions = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutHeaderActions")
);
const user = resolveComponent(
  vertex.getCustomLayoutComponent("LayoutHeaderUser")
);
</script>

<style lang="scss">
.applicationLayoutBasicHeader {
  width: 100%;
  height: 100%;
  align-items: center;
  padding: var(--padding) 0px;
  display: grid;
  grid-template-columns: 240px 1fr auto auto;
  grid-gap: 16px;
  &Wrapper {
    width: 100%;
    height: calc(40px + var(--padding) * 2);
    border-bottom: 1px solid var(--Fill-Divider);
    background-color: var(--Fill-Header);
    color: var(--Text-On-Fill-Header);
  }
  &Search {
  }
  &Actions {
    padding-left: 16px;
  }
  &User {
    border-left: 1px solid var(--Fill-Divider);
    padding-left: 16px;
  }
}
</style>
