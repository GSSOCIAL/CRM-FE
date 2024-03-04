<script setup lang="ts">
    import {onBeforeUnmount,inject, defineProps, useSlots } from 'vue'
    
    const slots = useSlots();
    const props = defineProps({
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        }
    })
    const { registerChild, unregisterChild } = inject('TabsProvider');

    const childInfo = {
        id: props.id,
        name: props.name,
        context: slots.default
    }

    registerChild(childInfo);
    onBeforeUnmount(() => {
        unregisterChild(childInfo);
    })
</script>

<template>
  <div class="tabContainer">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .tabContainer{
    width: 100%;
  }
</style>