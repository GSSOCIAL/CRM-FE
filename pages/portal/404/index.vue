<!-- 
Page for not-exists modules
-->
<script setup lang="ts">
</script>

<template>
  <PageWrapper>
    <Breadcrumbs :path="[]" />
    <PageHead>
      <template v-slot:default>Not Found</template>
      <template v-slot:actions> </template>
    </PageHead>
  </PageWrapper>
</template>
