<script setup lang="ts">
    const { $getModule, $userHasRole, $api } = useNuxtApp()

    const form = useState('form', () => {
        return {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            state: 1
        }
    })

    /**
     * Create model instance
     */
    const create = ()=>{
        $api.contacts.createContact(form.value).then((response)=>{
            console.log(response);
        })
    }
</script>

<template>
  <PageWrapper>
    <FormBuilder>
        <Breadcrumbs />
        <PageHead>
        <template v-slot:default>Create Contact</template>
        <template v-slot:actions>
            <Button type="primary" @click="create">Save</Button>
        </template>
        </PageHead>
        <FormsContactsAdd :form="form"/>
    </FormBuilder>
  </PageWrapper>
</template>
