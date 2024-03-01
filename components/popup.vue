<template>
    <div class="popupContainer" @click.self="$emit('close')">
        <div class="popupContext">
            <div class="popupWrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style lang="scss">
.popupContainer{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 10;
    background-color: var(--overlay);
    padding: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: auto;
    >.popupContext{
        >.popupWrapper{
            background-color: var(--background);
            box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
            border-radius: 7px;
            min-width: 400px;
            max-width: calc(100vw - 100px);
            top: -100px;
            opacity: 0;
            animation: popup-in .3s cubic-bezier(0.215, 0.610, 0.355, 1) forwards, popup-visibility .2s ease-in-out forwards;
        }
    }

    @keyframes popup-in{
        0%{
            top: -100px;
            opacity: 0;
        }
        100%{
            top: 0px;
            opacity: 1;
        }
    }
    @keyframes popup-visibility{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
}
</style>