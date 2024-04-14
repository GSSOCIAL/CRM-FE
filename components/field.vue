<template>
  <div
    class="fieldContainer"
    :class="{
      disabled: disabled,
      [`type${type}`]: true,
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
import FieldOption from "@/components/field/option.vue";

const constructors: { [type: string]: any } = {
  text: FieldText,
  enum: FieldEnum,
  option: FieldOption,
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
    padding-bottom: 6px;
  }
  > .fieldWrapper {
    width: 100%;
    color: var(--field-text);
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
  &:not(.typeoption) {
    > .fieldWrapper {
      background-color: var(--field-fill);
      border: 1px solid var(--field-outline);
    }
  }
}
</style>
