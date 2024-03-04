<script setup lang="ts">
  const { $getModule, $userHasRole, $api } = useNuxtApp()
  
  const props = defineProps({
        form: {
            type: Object,
            default: {},
            required: true
        }
    })
</script>

<template>
    <FormRow>
        <Field placeholder="First Name" v-model="form.firstName" />
        <Field placeholder="Last Name" v-model="form.lastName"/>
    </FormRow>
    <FormRow>
        <Field placeholder="Date Of Birth" v-model="form.dateOfBirth"/>
    </FormRow>
</template>
