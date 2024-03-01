<script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        props: {
            placeholder: {
                type: String,
                default: "",
                required: false,
            },
            disabled: {
                type: Boolean,
                default: false,
                required: false
            },
        }
    })
</script>

<template>
    <input type="text" :placeholder="placeholder" />
</template>

<style lang="scss">
@import "assets/style/mixins.scss";
</style>