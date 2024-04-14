<script setup lang="ts">
const { $getModule, $userHasRole, $api } = useNuxtApp();

const form = useState("form", () => {
  return {};
});
</script>

<template>
  <FormRow>
    <Field
      :label="$t('settings.preferences.fields.language')"
      v-model="form.language"
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
