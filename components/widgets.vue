<template>
    <div class="widgetsContainer" :class="{
        editMode: editMode
    }">
       
    </div>
</template>

<script setup lang="ts">
    const nuxtApp = useNuxtApp()
    const props = defineProps({
        editMode: {
            type: Boolean,
            default: false,
            required: false
        }
    })
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
@import "assets/style/animations.scss";

.widgetsContainer{
    &.editMode{

    }
}
</style>