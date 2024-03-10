import { useIdentityStore } from '@/store/identity'

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
        store: {
            identity: useIdentityStore($pinia)
        }
    }
  }
})