<template>
    <PageWrapper>
        <div class="pageHeadContainer">
            <div class="pageHeadLabel">
                <slot></slot>
            </div>
        </div>
    </PageWrapper>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .pageHeadContainer{
    width: 100%;
    >.pageHeadLabel{
        font-size: 28px;
        font-weight: 600;
    }
  }
</style>