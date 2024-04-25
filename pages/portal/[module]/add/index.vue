<!-- 
Generic module page
-->
<script setup lang="ts">
import { PlatformRoute } from "@/helpers/constants";
const { $getModule, $userHasRole, $api } = useNuxtApp();

//MARK: Check if module exists
const route = useRoute();
const moduleId = route.params?.module;
if (!$getModule(moduleId)) {
  await navigateTo(`${PlatformRoute}404`);
}
</script>

<template>
  <PageWrapper>
    <Breadcrumbs
      :path="[
        {
          url: $getModule(moduleId).route,
          label: $t($getModule(moduleId).label),
        },
        {
          url: `${$getModule(moduleId).route}/add`,
          label: $t(`${moduleId}.pages.add`),
        },
      ]"
    />
    <PageHead>
      <template v-slot:default>{{ $t($getModule(moduleId).label) }}</template>
      <template v-slot:actions>
        <Button type="primary">{{ $t("dashboard.actions.create") }}</Button>
      </template>
    </PageHead>
    <Container> </Container>
  </PageWrapper>
</template>
