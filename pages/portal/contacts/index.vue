<script setup lang="ts">
const { $getModule, $userHasRole, $api } = useNuxtApp();

const editMode = useState("editMode", () => false);

const columns = useState("columns", () => $getModule("contacts").columns);
const filters = useState("filters", () => $getModule("contacts").filters);
const data = useState("data", () => []);

onBeforeMount(() => {
  $api.contacts.getContactsList().then((response) => {
    data.value = response;
  });
});
</script>

<template>
  <PageWrapper>
    <Breadcrumbs
      :path="[
        {
          url: $getModule('contacts').route,
          label: $t($getModule('contacts').label),
        },
      ]"
    />
    <PageHead>
      <template v-slot:default>{{ $t($getModule("contacts").label) }}</template>
      <template v-slot:actions>
        <nuxt-link
          :to="`${$getModule('contacts').route}/add`"
          class="buttonLink"
        >
          <Button type="primary">{{ $t("dashboard.actions.create") }}</Button>
        </nuxt-link>
      </template>
    </PageHead>
    <Widgets :editMode="editMode" />
    <Tabs>
      <Tab id="all" :name="$t('contacts.tabs.all')">
        <TableFilters
          :columns="columns"
          :filters="filters"
          @updateColumns="
            (modifiedColumns) => {
              columns = modifiedColumns;
            }
          "
        />
        <TableBuilder :columns="columns">
          <TableRow
            v-for="item in data"
            :key="item.id"
            :columns="columns"
            :data="item"
          />
        </TableBuilder>
        <PageActions>
          <Wrapper />
          <ManagePage :columns="columns" />
        </PageActions>
      </Tab>
      <Tab id="pending" :name="$t('contacts.tabs.pending')"> Content 2 </Tab>
      <Tab id="draft" :name="$t('contacts.tabs.draft')"> Content 2 </Tab>
    </Tabs>
  </PageWrapper>
</template>
