<template>
  <div class="viewEdit">
    <component :is="tabs">
      <component
        :is="tab"
        v-for="_tab in meta"
        :key="_tab.key"
        :id="_tab.key"
        :name="$t(_tab.tab)"
      >
        <component
          :is="form"
          :meta="_tab.sections"
          @change="mergeData"
        ></component>
      </component>
    </component>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const tabs = resolveComponent(vertex.getComponent("tabs"));
const tab = resolveComponent(vertex.getComponent("tab"));
const form = resolveComponent(vertex.getComponent("ViewForm"));

const props = defineProps({
  meta: {
    type: Object,
    required: true,
    default: {},
  },
});
const emit = defineEmits(["change"]);

const mergeData = (merge: any) => {
  emit("change", merge);
};

const { meta } = props;
</script>

<style lang="scss">
.viewEdit {
  width: 100%;
}
</style>
