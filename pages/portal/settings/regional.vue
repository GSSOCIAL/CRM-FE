<template>
  <component :is="wrapper">
    <component :is="page">
      <component :is="heading">
        <template #default>
          {{ $t("regional.title") }}
        </template>
        <template #description>
          {{ $t("regional.description") }}
        </template>
      </component>
      <div class="regionalSections">
        <div class="regionalSection">
          <div class="regionalSectionLabel">
            {{ $t("regional.fields.language") }}
          </div>
          <div class="regionalSectionContent">
            <component
              :is="field"
              type="enum"
              :options="languages"
              v-model="lang"
            />
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
const field = resolveComponent("Field");

const i18n = useI18n();
const lang = ref(i18n.locale);

const languages = computed(() => {
  return [...i18n.availableLocales].map((code) => {
    return {
      value: code,
      label: i18n.t(`languages.${code}`),
    };
  });
});

watch(lang, () => {
  i18n.locale = lang.value;
  localStorage.setItem("locale", lang.value);
});
</script>

<style lang="scss" scoped>
.reginoal {
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
    &Content {
      width: 100%;
    }
  }
}
</style>
