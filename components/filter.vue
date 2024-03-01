<template>
    <div class="filterContainer">
        <div class="filterContainerHead">
            <div class="filterContainerLabel">{{filter.label}}</div>
        </div>
        <div class="filterContainerContext">
            <SubFilter />
        </div>
    </div>
</template>

<script setup lang="ts">
    import type {ModuleFilter} from "@/interfaces/filter"
    import { h } from 'vue';
    import FilterText from "@/components/filter/text.vue"

    const nuxtApp = useNuxtApp()
    const props = defineProps({
        filter: {
            type: Object as PropType<ModuleFilter>,
            default: {},
            required: true
        }
    })
    const {filter} = props

    const constructors: {[type: string]: any} = {
        "text": FilterText
    };

    const SubFilter = () => h(constructors[filter.type as keyof typeof constructors],{
        placeholder: filter.placeholder
    })
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

.filterContainer{
    >.filterContainerHead{
        padding: 6px 0px;
        >.filterContainerLabel{
            @include label;
        }
    }
    >.filterContainerContext{

    }
}
</style>