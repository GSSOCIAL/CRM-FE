<template>
  <div
    class="fieldContainer"
    :class="{
      disabled: disabled,
      [`type${type}`]: true,
    }"
  >
    <div class="fieldContainerLabel">{{ label }}</div>
    <div class="fieldContainerWrapper">
      <Subfield
        @update:modelValue="update"
        :placeholder="$t('fields.search')"
      />
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
    type: String,
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

const update = (value: any) => {
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
@import "@/assets/style/mixins.scss";
.fieldContainer {
  width: 100%;
  &Label {
  }
  &Wrapper {
    width: 100%;
    z-index: 0;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--Fill-Field);
      border-radius: 4px;
    }
    input {
      border: 0px;
      outline: 0px;
      box-shadow: none;
      width: 100%;
      color: var(--Text-On-Fill-Field);
      background: transparent;
      padding: var(--padding);
      @include text("callout");
      &::placeholder {
        color: var(--Placeholder-On-Fill-Field);
      }
    }
  }
}
</style>
