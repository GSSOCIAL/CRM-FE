<template>
    <div class="pageHeadContainer">
        <div class="pageHeadLabel">
            <slot></slot>
        </div>
        <div class="pageHeadActions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .pageHeadContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px 0px 12px;
    >.pageHeadLabel{
        width: 100%;
        flex: 1;
        font-size: 32px;
        font-weight: 600;
        color: var(--text-primary);
    }
    >.pageHeadActions{
        display: flex;
        flex-direction: row;
        >:not(:last-child){
            margin-right: 6px;
        }
    }
  }
</style>