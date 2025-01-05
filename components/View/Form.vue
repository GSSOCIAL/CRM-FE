<template>
  <div class="viewForm">
    <div class="viewFormSections">
      <div class="viewFormSection" v-for="section in meta" :key="section.key">
        <div class="viewFormSectionLabel">{{ $t(section.label) }}</div>
        <div class="viewFormSectionContext">
          <div
            class="viewFormSectionContextGroup"
            v-for="group in section.rows"
          >
            <component
              :is="field"
              v-for="fieldMeta in group"
              :label="$t(fieldMeta.label) ?? ''"
              :placeholder="$t(fieldMeta.placeholder) ?? ''"
              :type="fieldMeta.type ?? 'text'"
              :options="fieldMeta.options ?? []"
              v-model="form[fieldMeta.id]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
const field = resolveComponent(vertex.getComponent("field"));

const props = defineProps({
  meta: {
    type: Object,
    required: true,
    default: {},
  },
});
const emit = defineEmits(["change"]);
const { meta } = props;

const form = ref({});
watch(form.value, () => {
  emit("change", form);
});
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.viewForm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 24px 0px;
  &Sections {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  &Section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    &Label {
      width: 100%;
      color: var(--Text-On-Fill-Secondary);
      @include text("headline");
    }
    &Context {
      width: 100%;
      &Group {
        width: 100%;
        display: grid;
        grid-gap: 12px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      }
    }
  }
}
</style>
