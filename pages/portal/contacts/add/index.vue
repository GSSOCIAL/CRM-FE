<script setup lang="ts">
const { $getModule, $userHasRole, $api } = useNuxtApp();

const form = useState("form", () => {
  return {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    state: 1,
  };
});

/**
 * Create model instance
 */
const create = () => {
  $api.contacts.createContact(form.value).then((response) => {
    console.log(response);
  });
};
</script>

<template>
  <PageWrapper>
    <FormBuilder>
      <Breadcrumbs
        :path="[
          {
            url: $getModule('contacts').route,
            label: $t($getModule('contacts').label),
          },
          {
            url: `${$getModule('contacts').route}/add`,
            label: $t('contacts.pages.add'),
          },
        ]"
      />
      <PageHead>
        <template v-slot:default>{{ $t("contacts.pages.add") }}</template>
        <template v-slot:actions>
          <Button type="primary" @click="create">{{
            $t("dashboard.actions.create")
          }}</Button>
        </template>
      </PageHead>
      <FormsContactsAdd :form="form" />
    </FormBuilder>
  </PageWrapper>
</template>
