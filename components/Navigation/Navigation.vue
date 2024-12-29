<template>
  <div class="navigation">
    <navigation />
  </div>
</template>

<script setup lang="ts">
import type { VertexNavigation } from "vertex-admin";
const { t } = useI18n();
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => {
      return [];
    },
  },
});

const createItem = (item: VertexNavigation) => {
  return h(
    "div",
    {
      class: "navigationContainerItem",
    },
    [
      [
        item.label && item.label.length > 0
          ? [
              h(
                item.route ? resolveComponent("NuxtLink") : "div",
                {
                  class: "navigationContainerItemLabel",
                  to: item.route ?? "",
                },
                item.route
                  ? {
                      default: () => h("span", t(item.label)),
                    }
                  : [h("span", t(item.label))]
              ),
            ]
          : [],
      ],
      [
        item.items && item.items.length > 0
          ? h(
              "div",
              {
                class: "navigationContainerItemList",
              },
              [
                item.items.map((_item: VertexNavigation) => {
                  return createItem(_item);
                }),
              ]
            )
          : [],
      ],
    ]
  );
};
const navigation = () => {
  return h(
    "div",
    {
      class: "navigationContainer",
    },
    [
      props.items.map((item: VertexNavigation) => {
        return createItem(item);
      }),
    ]
  );
};
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.navigation {
  width: 100%;
  height: 100%;
  &Container {
    width: 100%;
    display: grid;
    grid-gap: 12px;
    &Item {
      &Label {
      }
      &List {
        display: grid;
        grid-gap: 2px;
        > .navigationContainerItem {
          .navigationContainerItemLabel {
            text-decoration: none;
            color: var(--Text-On-Fill-Primary);
            @include text("body");
          }
        }
      }
    }
    & > &Item {
      > .navigationContainerItem {
        &Label {
          cursor: default;
          text-decoration: none;
          color: var(--Text-On-Fill-Tertiary);
          @include text("headline");
          padding-bottom: 4px;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
