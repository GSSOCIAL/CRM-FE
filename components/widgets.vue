<template>
  <div
    class="widgetsContainer"
    :class="{
      editMode: editMode,
    }"
  >
    <Button v-if="editMode" type="clean" size="small">
      {{ $t("dashboard.actions.addWidget") }}
    </Button>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

.widgetsContainer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  //grid-template-rows: 200px;
  grid-gap: 20px;
  &.editMode {
  }
}
</style>
