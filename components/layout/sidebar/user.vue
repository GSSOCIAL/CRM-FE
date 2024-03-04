<template>
    <div class="sidebarUserProfileWrapper" :class="{
        'isCollapsed': isCollapsed
    }">
      <div class="sidebarUserProfile">
        <div class="userAvatar"></div>
        <div class="userDetails">
          <div class="userUserName">Mykhailo</div>
          <div class="userUserRole">Admin</div>
        </div>
        <div class="userDropdownButton"></div>
      </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        isCollapsed: {
            type: Boolean,
            default: false,
            required: true
        }
    })
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.sidebarUserProfileWrapper{
    padding: 48px 16px 12px;
    >.sidebarUserProfile{
        display: grid;
        grid-template-columns: 40px 1fr 30px;
        grid-gap: 12px;
        cursor: pointer;
        >.userAvatar{
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background-color: var(--area-placeholder-fill);
        }
        >.userDetails{
            >.userUserName{
                font-size: 16px;
                font-weight: 500;
            }
            >.userUserRole{
                @include label;
                font-size: 12px;
                font-weight: 400;
                color: var(--text-secondary);
            }
        }
        >.userDropdownButton{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            &:before,&:after{
                position: absolute;
                display: block;
            content: "";
                background-color: var(--text-primary);
                width: 10px;
                height: 2px;
            }
            &:before{
                transform: rotate(45deg);
                left: 7px;
            }
            &:after{
                transform: rotate(-45deg);
                right: 7px;
            }
        }
    }
    &.isCollapsed{
        >.sidebarUserProfile{
            >.userDetails{
                display: none;
            }
            >.userDropdownButton{
                display: none;
            }
        }
    }
}
</style>