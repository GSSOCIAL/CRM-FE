import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useIdentityStore = defineStore('identity', {
  state: () => ({
    token: useStorage('accesstoken','',localStorage,{
      mergeDefaults: true
    })
  }),
  actions: {
    setToken(token: string){
        this.token = token
    }
  },
  getters: {
    accessToken: (state) => state.token
  },
})