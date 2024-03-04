<script lang="ts">
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        name: 'FieldText',
        props: {
            modelValue: {
                type: String,
                default: "",
                required: true
            },
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
        },
        emits: {
            ['update:modelValue'](payload: { value: string }) {
                return true
            }
        },
        methods:{
            onInput(event){
                this.$emit('update:modelValue', event.target.value)
            }
        },
    })
</script>

<template>
    <input type="text" :placeholder="placeholder" :value="modelValue" @input="onInput"/>
</template>

<style lang="scss">
@import "assets/style/mixins.scss";
</style>