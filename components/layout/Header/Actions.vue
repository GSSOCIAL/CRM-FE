<template>
  <div class="applicationLayoutHeaderActionsWrapper">
    <div class="applicationLayoutHeaderActions">
      <svg
        class="notification"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
      >
        <g class="bell-main" fill="none">
          <path
            class="bell-1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.99996 14.873C12.6993 14.873 14.8733 14.2702 15.0833 11.8504C15.0833 9.43232 13.5676 9.58782 13.5676 6.62092C13.5676 4.30344 11.371 1.66666 7.99996 1.66666C4.62894 1.66666 2.43233 4.30344 2.43233 6.62092C2.43233 9.58782 0.916626 9.43232 0.916626 11.8504C1.12742 14.2793 3.30144 14.873 7.99996 14.873Z"
            stroke="#888888"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="bell-2"
            d="M9.99064 17.381C8.85386 18.6433 7.08052 18.6582 5.93286 17.381"
            stroke="#888888"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
</script>

<style lang="scss">
.applicationLayoutHeaderActions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  &Wrapper {
  }
}
</style>