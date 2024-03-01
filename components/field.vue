<template>
    <div class="fieldContainer" :class="{
        'disabled': disabled
    }">
        <div class="fieldLabel">{{label}}</div>
        <div class="fieldWrapper">
            <Subfield />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { h } from 'vue';
    import FieldText from "@/components/field/text.vue"

    const constructors: {[type: string]: any} = {
        "text": FieldText
    };

    const props = defineProps({
        label: {
            type: String,
            default: "",
            required: false,
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
        type: {
            type: String as unknown as keyof typeof constructors,
            default: "text",
            required: false
        }
    })
    const {label, placeholder, disabled, type} = props

    const Subfield = () => h(constructors[type as keyof typeof constructors],{
        placeholder: placeholder,
        disabled: disabled
    })
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.fieldContainer{
    width: 100%;
    >.fieldLabel{
        @include label;
    }
    >.fieldWrapper{
        width: 100%;
        background-color: var(--field-fill);
        color: var(--field-text);
        border: 1px solid var(--field-outline);
        border-radius: 8px;

        input{
            box-shadow: none;
            outline: none;
            background-color: transparent;
            border: none;
            padding: 8px 10px;
            font-size: 14px;
            &::placeholder{
                @include label;
                color:var(--field-placeholder);
                font-size: 14px;
            }
        }
    }
}
</style>