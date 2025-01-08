<template>
  <div
    class="applicationLayoutBasicSidebarCollapse"
    @click="toggleSidebar"
  ></div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const toggleSidebar = () => {
  const state = vertex.getProperty("sidebar");
  if (!state) {
    return vertex.setProperty("sidebar", "closed");
  }
  return vertex.setProperty("sidebar", "");
};
const collapsed = ref(false);
</script>

<style lang="scss">
.applicationLayoutBasicSidebarCollapse {
  width: 18px;
  height: 18px;
  border: 2px solid var(--Fill-Icon);
  border-radius: 2px;
  overflow: hidden;
  background: var(--Fill-Background);
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 2px;
    background-color: var(--Fill-Icon);
    left: 4px;
    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) left;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    background-color: var(--Fill-Sidebar);
    left: 0px;
    width: 4px;
    opacity: 0.16;
    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) width;
  }
  &:hover {
    &:before {
      left: 2px;
    }
    &:after {
      width: 2px;
    }
  }
}

body[sidebar="closed"] {
  .applicationLayoutBasicSidebarCollapse {
    &:before {
      left: 2px;
    }
    &:after {
      width: 2px;
    }
    &:hover {
      &:before {
        left: 4px;
      }
      &:after {
        width: 4px;
      }
    }
  }
}
</style>
