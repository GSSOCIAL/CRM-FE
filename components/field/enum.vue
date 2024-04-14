<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FieldEnum",
  data() {
    return {
      listActive: false,
    };
  },
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
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
    options: {
      type: Array,
      default: [],
      required: true,
    },
  },
  emits: {
    ["update:modelValue"](payload: { value: string }) {
      return true;
    },
  },
  methods: {
    onInput(value: string) {
      this.listActive = false;
      this.$emit("update:modelValue", value);
    },
  },
  computed: {
    label() {
      if (this.modelValue) {
        const optionIndex = this.options.findIndex(
          ({ value }) => value == this.modelValue
        );
        if (optionIndex >= 0) {
          return this.options[optionIndex].label;
        }
      }
      return "";
    },
  },
});
</script>

<template>
  <div class="fieldEnumContainer">
    <div class="fieldSelectedValue">
      <input
        type="text"
        :value="label"
        :placeholder="placeholder || 'Select'"
        @click="
          () => {
            listActive = true;
          }
        "
      />
    </div>
    <div class="fieldEnumOptions" v-if="listActive">
      <div
        class="fieldEnumOption"
        v-for="option in options"
        :key="option.value"
        @click="
          () => {
            onInput(option.value);
          }
        "
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/style/mixins.scss";
.fieldEnumContainer {
  > .fieldSelectedValue {
    cursor: pointer;
    > * {
      cursor: pointer;
    }
  }
  > .fieldEnumOptions {
    position: absolute;
    background-color: var(--fill-section);
    > .fieldEnumOption {
      @include label;
      cursor: pointer;
    }
  }
}
</style>
