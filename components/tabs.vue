<script setup lang="ts">
    import {ref, provide, defineProps } from 'vue'
    
    const selected = useState('selected', () => "")
    const registerChild = (child) => {
        if (!selected.value){
            selected.value = child.id
        }
        registeredChildren.value.push(child);
    };
    const unregisterChild = (child) => {
        registeredChildren.value = 
            registeredChildren.value.filter(
            registeredChild => registeredChild !== child
            );
    };
    const selectedTab = computed(() => {
        return registeredChildren.value[registeredChildren.value.findIndex(({id})=>id==selected.value)]
    })
    const registeredChildren = ref([]);

    provide('TabsProvider', { registerChild, unregisterChild })
</script>

<template>
  <div class="tabsContainer">
    <div class="tabsHeader">
        <div class="tabHeaderItem" v-for="tab in registeredChildren" :key="tab" :class="{
            'selected': selected == tab.id
        }" @click="()=>{
            selected = tab.id            
        }">
            <div class="tabHeaderLabel">{{tab.name}}</div>
        </div>
    </div>
    <div class="tabsContext">
        <component v-if="selectedTab" :is="selectedTab.context" />
    </div>
    <div v-show="false">
        <slot />
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/style/mixins.scss";
  .tabsContainer{
    width: 100%;
    >.tabsHeader{
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid var(--divider);
        .tabHeaderItem{
            @include label;
            cursor: pointer;
            color: var(--text-primary);
            font-size: 14px;
            padding: 12px;
            border-bottom: 2px solid transparent;
            margin-bottom: -2px;
            >.tabHeaderLabel{

            }
            &.selected{
                border-bottom-color: var(--primary);
            }
        }
    }
    >.tabsContext{}
  }
</style>