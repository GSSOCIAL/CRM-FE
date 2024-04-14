<script setup lang="ts">
const { $getModule, $userHasRole, $api } = useNuxtApp();
</script>

<template>
  <PageWrapper>
    <Breadcrumbs
      :path="[
        {
          url: $getModule('settings').route,
          label: $t($getModule('settings').label),
        },
      ]"
    />
    <PageHead>
      <template v-slot:default>{{ $t($getModule("settings").label) }}</template>
      <template v-slot:actions> </template>
    </PageHead>
    <Container>
      <Tabs :vertical="true">
        <Tab id="preferences" :name="$t('settings.preferences.label')">
          <FormBuilder>
            <FormsSettingsPreferences />
          </FormBuilder>
        </Tab>
      </Tabs>
    </Container>
  </PageWrapper>
</template>
