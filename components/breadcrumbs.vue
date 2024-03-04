<template>
    <div class="breadCrumbsContainer">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Contacts</BreadcrumbItem>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped lang="scss">
.breadCrumbsContainer{
    width: 100%;
    padding: 48px 0px 12px;
    display: flex;
    flex-direction: row;

    >*:not(:last-child){
        margin-right: 14px;
        &:after{
            content: "";
            display: block;
            position: absolute;
            right: -10px;
            top: calc(50% - 3px);
            width: 6px;
            height: 6px;
            border-radius: 100%;
            background-color: var(--divider);
        }
    }
}
</style>