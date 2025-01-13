<template>
  <div class="filterTextContainer">
    <Field :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
});
const { filter } = props;
</script>

<style lang="scss">
@import "assets/style/animations.scss";

.filterTextContainer {
}
</style>
