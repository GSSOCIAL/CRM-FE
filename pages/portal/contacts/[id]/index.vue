<script setup lang="ts">
const { $getModule, $userHasRole, $api } = useNuxtApp();
const route = useRoute();
</script>

<template>
  <PageWrapper>
    <Breadcrumbs
      :path="[
        {
          url: $getModule('contacts').route,
          label: $t($getModule('contacts').label),
        },
        {
          url: `${$getModule('contacts').route}/${route.params.id}`,
          label: $t('Item'),
        },
      ]"
    />
    <PageHead>
      <template v-slot:default>{{ $t("contacts.moduleName") }}</template>
      <template v-slot:actions></template>
    </PageHead>
    <DetailsView>
      <DetailsSection :label="$t('contacts.sections.details')">
        <DetailsRow :label="$t('contacts.fields.firstName')">Misha</DetailsRow>
      </DetailsSection>
    </DetailsView>
  </PageWrapper>
</template>
