<template>
  <div class="applicationLayoutBasicSidebarNavigationWrapper">
    <navigationLayout />
  </div>
</template>

<script setup lang="ts">
import vertex from "vertex-admin";
import type { VertexNavigation } from "vertex-admin";
const { t } = useI18n();
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const renderNavigation = (item: VertexNavigation) => {
  return h(
    "div",
    {
      class: "applicationLayoutBasicSidebarNavigationItem",
    },
    [
      [
        item.label && item.label.length > 0
          ? [
              h(
                item.route ? resolveComponent("NuxtLink") : "div",
                {
                  class: "applicationLayoutBasicSidebarNavigationItemLabel",
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
                class: "applicationLayoutBasicSidebarNavigationItemGroup",
              },
              [
                item.items.map((_item: VertexNavigation) => {
                  return renderNavigation(_item);
                }),
              ]
            )
          : [],
      ],
    ]
  );
};
const navigationLayout = () => {
  return h(
    "div",
    {
      class: "applicationLayoutBasicSidebarNavigation",
    },
    [
      props.items.map((item: VertexNavigation) => {
        return renderNavigation(item);
      }),
    ]
  );
};
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";
.applicationLayoutBasicSidebarNavigation {
  width: 100%;
  height: 100%;
  &Wrapper {
    width: 100%;
    height: 100%;
  }
  &Item {
    &Label {
    }
    &Group {
      display: grid;
      grid-gap: 2px;
      .applicationLayoutBasicSidebarNavigationItem {
        &Label {
          display: grid;
          width: 100%;
          height: 100%;
          padding: var(--padding);
          cursor: pointer;
          color: var(--Text-On-Fill-Secondary);
          text-decoration: none;
          z-index: 0;
          &:before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: var(--Secondary);
            opacity: 0;
            border-radius: 6px;
            z-index: -1;
          }
          &:hover {
            color: var(--Primary);
            &:before {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  & > &Item {
    padding: var(--padding);
    & > .applicationLayoutBasicSidebarNavigationItemLabel {
      color: var(--Text-On-Fill-Tertiary);
      text-transform: uppercase;
      @include text("headline");
      cursor: default;
      padding-bottom: 2px;
    }
    &:not(:last-child) {
      border-bottom: 1px solid var(--Fill-Divider);
    }
  }
}
</style>
