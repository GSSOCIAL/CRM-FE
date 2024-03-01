<template>
    <div class="popupHeadContainer">
        <div class="popupHeading">
            <div class="popupLabel">
                <slot></slot>
            </div>
            <div class="popupDescription">
                <slot name="description"></slot>
            </div>
        </div>
        <div class="popupCloseButton">
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
.popupHeadContainer{
    width: 100%;
    display: grid;
    >.popupHeading{
        padding: 16px;
        display: grid;
        grid-gap: 1px;
        >.popupLabel{
            color: var(--text);
            font-size: 18px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
        }
        >.popupDescription{
            font-size: 14px;
            color: var(--secondary-text);
        }
    }
}
</style>