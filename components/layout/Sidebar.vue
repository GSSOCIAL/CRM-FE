<template>
  <div class="applicationSidebarContainer" :class="{
    'sidebarCollapsed': isCollapsed
  }">
    <LayoutSidebarUser :isCollapsed="isCollapsed"/>
    <div class="sidebarGlobalSearch">
      <Field placeholder="Search" />
    </div>
    <div class="sidebarNavigation">
      <nuxt-link class="navigationItemWrapper" v-for="item in navigation" :key="item.id" :to="item.route">
        <div class="navigationItem">
          <div class="icon">
            <icon :icon="item.icon" type="linear"/>
          </div>
          <div class="label">{{item.label}}</div>
        </div>
      </nuxt-link>
    </div>
    <div class="sidebarActions"></div>
    <div class="sidebarCollapseButton">
      <div class="sidebarCButton" @click="isCollapsed = !isCollapsed"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import navigationDefs from "@/config/navigation"
  import {makeid} from "@/helpers/functions"

  const { $getModule, $userHasRole } = useNuxtApp()
  const isCollapsed = useState('isCollapsed', () => false)
  
  let navigation = (navigationDefs.sidebar || []).filter((item)=>{
    return $userHasRole(item?.role ?? $getModule(item.module).role)
  }).map((item)=>{
    return {
      id: makeid(),
      route: item?.route ?? $getModule(item.module).route,
      label: item?.label ?? $getModule(item.module).label,
      icon: item?.icon ?? $getModule(item.module).icon,
    }
  })
</script>

<style lang="scss">
  @import "assets/style/mixins.scss";
  .applicationSidebarContainer{
    width: 100%;
    max-width: 260px;
    min-height: 100vh;
    max-height: 100vh;
    background-color: var(--sidebar-fill);
    color: var(--sidebar-text);
    font-size: var(--font-default);
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--divider);
    .sidebarGlobalSearch{
      padding: 12px var(--padding);
      border-bottom: 1px solid var(--divider);
    }
    .sidebarNavigation{
      height: 100%;
      @include label;
      padding: 12px 0px;
      .navigationItemWrapper{
          color: var(--sidebar-navigation-text);
          text-decoration: none;
          padding: 0px var(--padding);
          box-sizing: border-box;
          display: block;
          font-weight: 500;
          .navigationItem{
            background-color: var(--sidebar-navigation-fill);
            padding: 6px;
            display: grid;
            grid-template-columns: 24px 1fr;
            grid-gap: var(--padding);
            align-items: center;
            border-radius: 6px;
            >.icon{
              svg{
                fill: var(--sidebar-navigation-icon);
                stroke: var(--sidebar-navigation-icon);
              }
            }
            >.label{}
          }
        &:hover, &.router-link-active{
          color: var(--sidebar-navigation-focus-text);
          >.navigationItem{
            background-color: var(--sidebar-navigation-focus-fill);
            >.icon svg{
              fill: var(--sidebar-navigation-focus-icon);
              stroke: var(--sidebar-navigation-focus-icon);
            }
          }
        }
        &:not(:last-child){
          margin-bottom: 2px;
        }
      }
    }
    .sidebarActions{}
    .sidebarCollapseButton{
      padding: var(--padding);
      display: grid;
      grid-template-columns: 40px;
      >.sidebarCButton{
        width: 40px;
        height: 40px;
        background-color: var(--area-placeholder-fill);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        &:before,&:after{
          position: absolute;
          content: "";
          display: block;
          background-color: #fff;
          width: 12px;
          height: 3px;
          border-radius: 2px;
        }
        &:before{
          transform: rotate(45deg);
          bottom: 14px;
        }
        &:after{
          transform: rotate(-45deg);
          top: 14px;
        }
      }
    }
    &.sidebarCollapsed{
      max-width: 32px + 40px;
      .sidebarNavigation{
        .navigationItemWrapper{
          .navigationItem{
            display: flex;
            flex-direction: row;
            width: 40px;
            .icon{
              display: flex;
              align-items:center;
              justify-content: center;
              .iconContainer{
                width: 26px;
              }
            }
            .label{
              position: absolute;
              font-size: 12px;
              padding: 4px 6px;
              color: #fff;
              background-color: rgba(0,0,0,0.7);
              border-radius: 4px;
              left: 0px;
              opacity: 0;
              transition: 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) left;
            }
          }
          &:hover{
            .navigationItem{
              .label{
                left: 50px;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
</style>