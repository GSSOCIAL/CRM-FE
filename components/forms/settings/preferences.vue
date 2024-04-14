<script setup lang="ts">
import { ref, watch } from "vue";
const { $theme } = useNuxtApp();

const appearance = ref($theme.get() || "light");
const language = ref("en");

watch(appearance, () => {
  $theme.set(appearance.value);
});

const layoutDOM = (h) => {
  return h(
    "div",
    {
      class: "appearanceLayoutWindow",
    },
    [
      h(
        "div",
        {
          class: "appearanceLayoutHead",
        },
        [
          h(
            "div",
            {
              class: "appearanceLayoutActions",
            },
            [h("div"), h("div"), h("div")]
          ),
        ]
      ),
      h(
        "div",
        {
          class: "appearanceLayoutContext",
        },
        [
          h(
            "div",
            {
              class: "appearanceLayoutSidebar",
            },
            [h("div"), h("div"), h("div"), h("div"), h("div")]
          ),
          h(
            "div",
            {
              class: "appearanceLayoutBody",
            },
            [h("div"), h("div"), h("div"), h("div"), h("div")]
          ),
        ]
      ),
    ]
  );
};
</script>

<template>
  <FormRow :columns="1">
    <Field
      :label="$t('settings.preferences.fields.appearance')"
      v-model="appearance"
      type="option"
      :options="[
        {
          value: 'light',
          label: 'Light',
          render: (h) => {
            return h(
              'div',
              {
                class: 'appearanceImageLight',
              },
              [layoutDOM(h)]
            );
          },
        },
        {
          value: 'dark',
          label: 'Dark',
          render: (h) => {
            return h(
              'div',
              {
                class: 'appearanceImageDark',
              },
              [layoutDOM(h)]
            );
          },
        },
      ]"
    />
  </FormRow>
  <FormRow>
    <Field
      :label="$t('settings.preferences.fields.language')"
      v-model="language"
      type="enum"
      :options="[
        {
          value: 'en',
          label: 'English',
        },
        {
          value: 'ua',
          label: 'Ukrainian',
        },
      ]"
    />
  </FormRow>
</template>

<style lang="scss">
@import "assets/style/mixins.scss";
.appearanceImageLight,
.appearanceImageDark {
  padding: 24px 24px 0px 24px;
}
.appearanceImageLight {
  background-color: #606060;
  .appearanceLayoutWindow {
    .appearanceLayoutContext {
      background-color: var(--themeLightBackgroundFill);
      > .appearanceLayoutSidebar {
        background-color: var(--themeLightSidebarFill);
        > div {
          background-color: var(--themeLightSidebarItem);
          &:nth-child(1) {
            background-color: var(--themeLightSidebarPrimary);
          }
        }
      }
      > .appearanceLayoutBody {
        > div {
          background-color: var(--themeLightContentItem);
          &:nth-child(3) {
            background-color: var(--themeLightContentPrimary);
          }
        }
      }
    }
  }
}
.appearanceImageDark {
  background-color: #606060;
  .appearanceLayoutWindow {
    .appearanceLayoutContext {
      background-color: var(--themeDarkBackgroundFill);
      > .appearanceLayoutSidebar {
        background-color: var(--themeDarkSidebarFill);
        > div {
          background-color: var(--themeDarkSidebarItem);
          &:nth-child(1) {
            background-color: var(--themeDarkSidebarPrimary);
          }
        }
      }
      > .appearanceLayoutBody {
        > div {
          background-color: var(--themeDarkContentItem);
          &:nth-child(3) {
            background-color: var(--themeDarkContentPrimary);
          }
        }
      }
    }
  }
}
.appearanceLayoutWindow {
  > .appearanceLayoutHead {
    background-color: #fff;
    padding: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    > .appearanceLayoutActions {
      display: grid;
      grid-template-columns: 6px 6px 6px;
      grid-gap: 2px;
      > div {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        &:nth-child(1) {
          background-color: #ff6855;
        }
        &:nth-child(2) {
          background-color: #fde56b;
        }
        &:nth-child(3) {
          background-color: #9dfc6d;
        }
      }
    }
  }
  > .appearanceLayoutContext {
    display: grid;
    grid-template-columns: 40px 1fr;
    > .appearanceLayoutSidebar {
      border-right: 1px solid transparent;
      padding: 6px;
      display: grid;
      grid-gap: 6px;
      > div {
        width: 100%;
        height: 8px;
        border-radius: 4px;
        &:nth-child(1) {
          margin-bottom: 12px;
        }
      }
    }
    > .appearanceLayoutBody {
      padding: 6px;
      display: grid;
      grid-gap: 6px;
      > div {
        width: 100%;
        height: 8px;
        border-radius: 2px;
        &:nth-child(1) {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>