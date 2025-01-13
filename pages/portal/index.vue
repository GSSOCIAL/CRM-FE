<template>
  <PageWrapper>
    <PageHead style="padding-top: 32px">
      <template v-slot:default> </template>
      <template v-slot:actions>
        <Button
          type="clean"
          size="small"
          @click="
            () => {
              editMode = true;
            }
          "
        >
          {{ $t("dashboard.actions.editPage") }}
        </Button>
      </template>
    </PageHead>
    <Widgets :editMode="editMode" />
  </PageWrapper>
</template>

<script setup lang="ts">
const editMode = useState("editMode", () => false);
</script>
