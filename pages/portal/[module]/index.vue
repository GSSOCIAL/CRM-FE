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
      ]"
    />
    <PageHead>
      <template v-slot:default>{{ $t($getModule(moduleId).label) }}</template>
      <template v-slot:actions>
        <nuxt-link :to="`${$getModule(moduleId).route}/add`" class="buttonLink">
          <Button type="primary">{{ $t("dashboard.actions.create") }}</Button>
        </nuxt-link>
      </template>
    </PageHead>
    <Tabs> </Tabs>
  </PageWrapper>
</template>
