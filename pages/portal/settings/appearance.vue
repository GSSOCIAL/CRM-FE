<template>
  <component :is="wrapper">
    <component :is="page">
      <component :is="heading">
        <template #default>
          {{ $t("appearance.title") }}
        </template>
        <template #description>
          {{ $t("appearance.description") }}
        </template>
      </component>
      <div class="appearanceSections">
        <div class="appearanceSection">
          <div class="appearanceSectionLabel">
            {{ $t("appearance.layout.label") }}
          </div>
          <div class="appearanceSectionList">
            <div
              class="appearanceSectionListItem"
              v-for="layout in layouts"
              :key="layout.key"
              :class="{
                selected: selectedLayout?.toLowerCase() == layout.key,
              }"
              @click="selectLayout(layout.key)"
            >
              <div class="appearanceSectionListItemPreview">
                <div class="appearanceSectionListItemPreviewBody">
                  <component :is="layout.preview" />
                </div>
              </div>
              <div class="appearanceSectionListItemLabel">
                {{ layout.label }}
              </div>
            </div>
          </div>
        </div>
        <div class="appearanceSection">
          <div class="appearanceSectionLabel">
            {{ $t("appearance.theme.label") }}
          </div>
          <div class="appearanceSectionList">
            <div
              class="appearanceSectionListItem"
              v-for="scheme in colorSchemes"
              :key="scheme.key"
              :class="{
                [`scheme-${scheme.key}`]: true,
                selected: scheme.key == selectedColorScheme,
              }"
              @click="selectScheme(scheme.key)"
            >
              <div
                class="appearanceSectionListItemPreview"
                :scheme="scheme.key"
              >
                <div class="appearanceSectionListItemPreviewBody">
                  <div class="appearanceSectionListItemPreviewSidebar">
                    <div
                      class="appearanceSectionListItemPreviewSidebarItem"
                    ></div>
                    <div
                      class="appearanceSectionListItemPreviewSidebarMenuItem"
                    >
                      <div
                        class="appearanceSectionListItemPreviewSidebarMenuItemIcon"
                      ></div>
                      <div
                        class="appearanceSectionListItemPreviewSidebarMenuItemLabel"
                      ></div>
                    </div>
                  </div>
                  <div class="appearanceSectionListItemPreviewContent">
                    <div class="appearanceSectionListItemPreviewContentHeader">
                      <div
                        class="appearanceSectionListItemPreviewContentHeaderItem"
                      ></div>
                      <div
                        class="appearanceSectionListItemPreviewContentHeaderMenuItem"
                      >
                        <div
                          class="appearanceSectionListItemPreviewContentHeaderMenuItemIcon"
                        ></div>
                        <div
                          class="appearanceSectionListItemPreviewContentHeaderMenuItemLabel"
                        ></div>
                      </div>
                    </div>
                    <div class="appearanceSectionListItemPreviewContentContext">
                      <div
                        class="appearanceSectionListItemPreviewContentLabel"
                      ></div>
                      <div
                        class="appearanceSectionListItemPreviewContentDescription"
                      ></div>
                      <div
                        class="appearanceSectionListItemPreviewContentButton"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="appearanceSectionListItemLabel">
                {{ $t(scheme.label) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </component>
  </component>
</template>

<script setup lang="ts">
const wrapper = resolveComponent("LayoutWrapper");
const page = resolveComponent("LayoutPage");
const heading = resolveComponent("LayoutHeading");

const app = useNuxtApp();
const i18n = useI18n();

const selectedColorScheme = ref(app.$theme.get());
const selectedLayout = ref("basic");

const layouts = computed(() => {
  const imports = [
    import.meta.glob(`@/layouts/themes/*/meta.json`, {
      eager: true,
      import: "default",
    }),
  ];
  let output: Array<Object> = [];
  imports.forEach((meta) => {
    const paths = Object.keys(meta);
    paths.forEach((path) => {
      output.push({
        key: meta[path].name,
        label: meta[path].label,
        preview: resolveComponent(`Layouts${meta[path].path}Preview`),
        schemes: meta[path].schemes,
      });
    });
  });
  return output.sort((a, b) => (a.label < b.label ? -1 : 1));
});

const layoutMeta = computed(() => {
  const index = layouts.value.findIndex(
    ({ key }) => key == selectedLayout.value
  );
  if (index >= 0) {
    return layouts.value[index];
  }
  return layouts.value[0];
});

const selectLayout = (name: string) => {
  app.hooks.callHook("layout:change", name);
  selectedLayout.value = name;

  selectScheme(layoutMeta.value.schemes[0]);
};

const colorSchemes = computed(() => {
  return (layoutMeta.value?.schemes ?? []).map((scheme) => {
    return {
      key: scheme,
      label: i18n.te(`appearance.theme.${scheme}`)
        ? `appearance.theme.${scheme}`
        : scheme,
    };
  });
});

const selectScheme = (scheme: string) => {
  app.hooks.callHook("colorScheme:change", scheme);
  selectedColorScheme.value = scheme;
};
</script>

<style lang="scss" scoped>
.appearance {
  &Sections {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
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
      @include text("body");
    }
    &List {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 240px));
      grid-gap: 12px;
      &Item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: var(--padding);
        background-color: var(--Fill-Secondary);
        color: var(--Text-On-Fill-Secondary);
        border-radius: 4px;
        border: 2px solid var(--Fill-Divider);
        cursor: pointer;
        &Preview {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          &Body {
            background: var(--Fill-Background);
            border: 2px solid var(--Fill-Divider);
            border-radius: 6px;
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: relative;
            &:before {
              content: "";
              display: block;
              padding-top: 72%;
            }
          }
          &Sidebar {
            background: var(--Fill-Sidebar);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 20%;
            border-right: 1px solid var(--Fill-Divider);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 4px;
            padding: 6px;
            &Item {
              width: 100%;
              border-radius: 4px;
              height: 6px;
              background: var(--Text-On-Fill-Sidebar);
            }
            &MenuItem {
              width: 100%;
              display: flex;
              flex-direction: row;
              gap: 2px;
              align-items: center;
              &Icon {
                width: 6px;
                height: 6px;
                background: var(--Fill-Icon);
                border-radius: 2px;
              }
              &Label {
                width: 100%;
                flex: 1;
                border-radius: 4px;
                height: 6px;
                background: var(--Text-On-Fill-Sidebar);
              }
            }
          }
          &Content {
            position: absolute;
            top: 0;
            left: 20%;
            bottom: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            &Header {
              background: var(--Fill-Header);
              width: 100%;
              height: 20%;
              border-bottom: 1px solid var(--Fill-Divider);
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 6px;
              gap: 6px;
              &Item {
                width: 20%;
                border-radius: 4px;
                height: 6px;
                background: var(--Text-On-Fill-Header);
              }
              &MenuItem {
                width: 20%;
                display: flex;
                flex-direction: row;
                gap: 2px;
                align-items: center;
                &Icon {
                  width: 6px;
                  height: 6px;
                  background: var(--Fill-Icon);
                  border-radius: 2px;
                }
                &Label {
                  width: 100%;
                  flex: 1;
                  border-radius: 4px;
                  height: 6px;
                  background: var(--Text-On-Fill-Header);
                }
              }
            }
            &Context {
              width: 100%;
              height: 100%;
              flex: 1;
              display: flex;
              padding: 6px;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 4px;
              background: var(--Fill-Background);
            }
            &Label {
              width: 60%;
              border-radius: 4px;
              background: var(--Text-On-Fill-Background);
              height: 6px;
            }
            &Description {
              width: 100%;
              border-radius: 4px;
              background: var(--Text-On-Fill-Secondary);
              height: 6px;
            }
            &Button {
              width: 20px;
              border-radius: 4px;
              background: var(--Primary);
              height: 6px;
            }
          }
        }
        &Label {
          @include text("headline");
        }
        &.selected {
          border-color: var(--Primary);
        }
      }
    }
  }
}
</style>
