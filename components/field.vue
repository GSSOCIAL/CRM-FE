<template>
  <div
    class="fieldContainer"
    :class="{
      disabled: disabled,
    }"
  >
    <div class="fieldLabel">{{ label }}</div>
    <div class="fieldWrapper">
      <Subfield @update:modelValue="update" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import FieldText from "@/components/field/text.vue";
import FieldEnum from "@/components/field/enum.vue";

const constructors: { [type: string]: any } = {
  text: FieldText,
  enum: FieldEnum,
};

const props = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  type: {
    type: String as unknown as keyof typeof constructors,
    default: "text",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  options: {
    type: Array,
    default: [],
    required: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

const update = (value) => {
  emit("update:modelValue", value);
};

const Subfield = () =>
  h(constructors[props.type as keyof typeof constructors], {
    modelValue: props.modelValue,
    placeholder: props.placeholder,
    disabled: props.disabled,
    options: props.options,
  });
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.fieldContainer {
  width: 100%;
  > .fieldLabel {
    @include label;
  }
  > .fieldWrapper {
    width: 100%;
    background-color: var(--field-fill);
    color: var(--field-text);
    border: 1px solid var(--field-outline);
    border-radius: 8px;

    input {
      box-shadow: none;
      outline: none;
      background-color: transparent;
      border: none;
      padding: 8px 10px;
      font-size: 14px;
      width: 100%;
      &::placeholder {
        @include label;
        color: var(--field-placeholder);
        font-size: 14px;
      }
    }
  }
}
</style>
