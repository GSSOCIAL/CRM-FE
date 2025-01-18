<template>
    <div class="popupActionsContainer">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
.popupActionsContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 16px;
    border-top: 1px solid var(--divider);
    >div.wrapper{
        width: 100%;
        flex: 1;
    }
    >*:not(:last-child){
        margin-right: 8px;
    }
}
</style>