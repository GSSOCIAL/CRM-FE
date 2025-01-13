<template>
  <div class="applicationLayoutBasicSidebarNavigationWrapper">
    <navigationLayout />
  </div>
</template>

<script setup lang="ts">
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
                () => [
                  item.icon
                    ? h(resolveComponent("icon"), {
                        icon: item.icon,
                      })
                    : h("div"),
                  h("span", t(item.label)),
                ]
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
          grid-template-columns: 24px 1fr;
          grid-gap: 6px;
          align-items: center;
          .iconContainer {
            svg {
              * {
                fill: none;
                stroke: none;
              }
              *[fill] {
                fill: var(--Text-On-Fill-Secondary);
              }
              *[stroke] {
                stroke: var(--Text-On-Fill-Secondary);
              }
            }
          }
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
      display: grid;
      grid-template-columns: 0px 1fr;
      grid-gap: 0px;
      align-items: center;
    }
    &:not(:last-child) {
      border-bottom: 1px solid var(--Fill-Divider);
    }
  }
}

body[sidebar="closed"] {
  .applicationLayoutBasicSidebarNavigation {
    .applicationLayoutBasicSidebarNavigationItem {
      .applicationLayoutBasicSidebarNavigationItemLabel {
        display: flex;
        z-index: 2;
        width: 100%;
        padding: 0px;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        &:after {
          content: "";
          display: block;
          padding-top: 100%;
        }
        .iconContainer {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: initial;
          height: initial;
        }
        span {
          position: absolute;
          display: flex;
          left: calc(100% + 200px);
          opacity: 0;
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 0.87);
          background: rgba(0, 0, 0, 0.8);
          border-radius: 2px;
          padding: 4px;
          color: #fff;
          z-index: -2;
          width: 0px;
          height: 0px;
          padding: 0px;
          @include text("headline");
        }
        &:hover {
          overflow: visible;
          span {
            opacity: 1;
            left: 100%;
            z-index: 0;
            width: initial;
            height: initial;
            padding: 4px;
          }
        }
      }
    }
    & > .applicationLayoutBasicSidebarNavigationItem {
      & > .applicationLayoutBasicSidebarNavigationItemLabel {
        display: none;
      }
    }
  }
}
</style>
