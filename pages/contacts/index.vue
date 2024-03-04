<script setup lang="ts">
  const { $getModule, $userHasRole } = useNuxtApp()
  
  const editMode = useState('editMode', () => false)

  const columns = useState('columns', () => $getModule("contacts").columns)
  const filters = useState('filters', () => $getModule("contacts").filters)
  //let columns = $getModule("contacts").columns

  const data = [
    {
      id: "1",
      firstName: "Dorothy",
      lastName: "M. Gutierrez",
      dateOfBirth: "1952-11-05",
    },
    {
      id: "2",
      firstName: "Sarah ",
      lastName: "M. H. Hardie",
      dateOfBirth: "1950-01-05",
    },
  ]
</script>

<template>
  <PageWrapper>
    <Breadcrumbs />
    <PageHead>
      <template v-slot:default>Contacts</template>
      <template v-slot:actions>
        <Button type="primary">Create</Button>
      </template>
    </PageHead>
    <Widgets :editMode="editMode"/>
    <Tabs>
        <Tab id="all" name="All Contacts">
          <TableFilters 
            :columns="columns"
            :filters="filters"
            @updateColumns="(modifiedColumns)=>{
              columns = modifiedColumns
            }"/>
          <TableBuilder :columns="columns">
            <TableRow v-for="item in data" :key="item.id" :columns="columns" :data="item" />
          </TableBuilder>
          <PageActions>
            <Wrapper />
            <ManagePage :columns="columns"/>
          </PageActions>
        </Tab>
        <Tab id="pending" name="Pending">
          Content 2
        </Tab>
        <Tab id="draft" name="Draft">
          Content 2
        </Tab>
    </Tabs>
  </PageWrapper>
</template>
