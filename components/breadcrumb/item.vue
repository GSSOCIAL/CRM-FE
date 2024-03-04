<template>
    <div class="breadCrumbItem">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.breadCrumbItem{
    @include label;
    color: var(--text-secondary);
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    &:hover{
        background-color: var(--fill-secondary);
    }
}
</style>