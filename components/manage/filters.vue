<template>
  <div class="manageFiltersContainer" :data-id="id">
    <div class="manageFiltersHead">
      <div class="manageFiltersLabel">Filters</div>
      <Button size="small" type="clean">Reset</Button>
    </div>
    <div class="manageFiltersWrapper">
      <div
        class="filterDefsContainer"
        v-for="filter in filters"
        :key="filter.prop"
      >
        <Filter :filter="filter" />
      </div>
    </div>
    <div class="manageFiltersActions">
      <div class="wrapper"></div>
      <Button size="small" type="clean">Reset</Button>
      <Button size="small" type="primary">Apply</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { makeid } from "~/helpers/functions";

const nuxtApp = useNuxtApp();
const props = defineProps({
  filters: {
    type: Array,
    default: [],
    required: true,
  },
});
const { filters } = props;
const id = useState("id", () => makeid());
const emit = defineEmits(["close", "apply"]);

const filterManagementMouseDown = (event) => {
  const target = event.target;

  //Detect if click outside filters container
  if (target.closest(".manageFiltersContainer")) {
    if (target.closest(".manageFiltersContainer").dataset["id"] == id.value) {
      return false;
    }
  }
  emit("close");
};

onBeforeMount(() => {
  window.addEventListener("mousedown", filterManagementMouseDown);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousedown", filterManagementMouseDown);
});
</script>

<style lang="scss">
@import "assets/style/animations.scss";

.manageFiltersContainer {
  position: absolute;
  background: var(--fill-section);
  z-index: 12;
  top: 100%;
  right: 0px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  > .manageFiltersHead {
    padding: var(--padding);
    display: flex;
    flex-direction: row;
    align-self: center;
    border-bottom: 1px solid var(--divider);
    > .manageFiltersLabel {
      padding-right: 12px;
      color: var(--text);
      font-weight: 500;
      font-size: 16px;
      width: 100%;
      align-self: center;
    }
  }
  > .manageFiltersWrapper {
    padding: 0px 0px var(--padding);
    > .filterDefsContainer {
      padding: 0px var(--padding) 12px;
      &:not(:last-child) {
        border-bottom: 1px solid var(--divider);
      }
    }
  }
  > .manageFiltersActions {
    display: flex;
    flex-direction: row;
    padding: 0px var(--padding) var(--padding);
    .wrapper {
      width: 100%;
      flex: 1;
    }
    > *:not(:last-child) {
      margin-right: 6px;
    }
  }
}
</style>
