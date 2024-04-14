<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FieldOption",
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
  /*
  render() {
    return h(
      "div",
      {
        class: "fieldOptionContainer",
      },
      [
        this.options.map((option) => {
          return h(
            "div",
            {
              class: {
                fieldOption: true,
                selected: option.value == this.modelValue,
              },
              on: {
                click: () => {
                  this.onInput(option.value);
                },
              },
            },
            [
              h(
                "div",
                {
                  class: "fieldOptionHeading",
                },
                [
                  h(
                    "div",
                    {
                      class: "fieldOptionLabel",
                    },
                    option.label
                  ),
                ]
              ),
              h(
                "div",
                {
                  class: "fieldOptionContext",
                },
                [typeof option.render == "function" ? option.render(h) : ""]
              ),
            ]
          );
        }),
      ]
    );
  },
  */
  setup(props, context) {
    return () =>
      h(
        "div",
        {
          class: "fieldOptionContainer",
        },
        [
          props.options.map((option) => {
            return h(
              "div",
              {
                class: {
                  fieldOption: true,
                  selected: option.value == props.modelValue,
                },
                onClick: () => {
                  context.emit("update:modelValue", option.value);
                },
              },
              [
                h(
                  "div",
                  {
                    class: "fieldOptionHeading",
                  },
                  [
                    h(
                      "div",
                      {
                        class: "fieldOptionLabel",
                      },
                      option.label
                    ),
                  ]
                ),
                h(
                  "div",
                  {
                    class: "fieldOptionContext",
                  },
                  [typeof option.render == "function" ? option.render(h) : ""]
                ),
              ]
            );
          }),
        ]
      );
  },
});
</script>

<!--
<template>
  <div class="fieldOptionContainer">
    <div
      class="fieldOption"
      v-for="option in options"
      :key="option.value"
      :class="{
        selected: option.value == modelValue,
      }"
      @click="
        () => {
          onInput(option.value);
        }
      "
    >
      <div class="fieldOptionHeading">
        <div class="fieldOptionLabel">{{ option.label }}</div>
      </div>
      <div class="fieldOptionContext"></div>
    </div>
  </div>
</template>
-->

<style lang="scss">
@import "assets/style/mixins.scss";
.fieldOptionContainer {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, 240px);
  .fieldOption {
    border-radius: 6px;
    border: 1px solid var(--divider);
    overflow: hidden;
    cursor: pointer;
    > .fieldOptionHeading {
      @include label;
      border-bottom: 1px solid inherit;
      font-size: 12px;
      padding: 6px;
      z-index: 1;
      > .fieldOptionLabel {
        z-index: 1;
      }
      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: var(--fill-secondary);
        z-index: 0;
      }
    }
    > .fieldOptionContext {
    }
    &.selected {
      border-color: var(--primary);
      > .fieldOptionHeading {
        color: var(--primary);
        &:before {
          background-color: var(--primary);
          opacity: 0.2;
        }
      }
    }
  }
}
</style>