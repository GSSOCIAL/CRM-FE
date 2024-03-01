<script setup lang="ts">
  const { $getModule, $userHasRole } = useNuxtApp()
  
  const columns = useState('columns', () => $getModule("contacts").columns)
  const filters = useState('filters', () => $getModule("contacts").filters)
  //let columns = $getModule("contacts").columns
</script>

<template>
  <PageHead>
    Contacts
  </PageHead>
  <PageWrapper>
    <TableFilters 
      :columns="columns"
      :filters="filters"
      @updateColumns="(modifiedColumns)=>{
        columns = modifiedColumns
      }"/>
    <TableBuilder :columns="columns">
      <TableRow :columns="columns" />
    </TableBuilder>
  </PageWrapper>
</template>
