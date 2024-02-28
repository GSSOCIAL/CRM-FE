<script setup lang="ts">
    import {icons} from "@/helpers/icons"

    const props = defineProps({
        icon: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: "linear"
        },
        size: {
            type: String,
            required: false,
            default: "normal"
        },
    })

    const {icon, type, size} = props
</script>

<template>
  <div class="iconContainer" :class="{
        [`size-${size}`]:true
    }" v-html="icons[icon.toLowerCase()][type]">
  </div>
</template>


<style lang="scss">
    .iconContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        &.size-normal{
            width: 18px;
            height: 18px;
            svg{
                max-width: 18px;
            }
        }
        &.size-normal{
            width: 22px;
            height: 22px;
            svg{
                max-width: 22px;
            }
        }
        &.size-large{
            width: 26px;
            height: 26px;
            svg{
                max-width: 26px;
            }
        }
    }
</style>