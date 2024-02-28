<script setup lang="ts">
  const { $getModule, $userHasRole } = useNuxtApp()
  let columns = $getModule("contacts").columns 
</script>

<template>
  <PageHead>
    Contacts
  </PageHead>
  <PageWrapper>
    <TableFilters :columns="columns" />
    <TableBuilder :columns="columns">
      <TableRow :columns="columns" />
    </TableBuilder>
  </PageWrapper>
</template>
