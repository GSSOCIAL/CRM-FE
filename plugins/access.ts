export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            userHasRole: (role: string) => {
                if (role == "*") return true
                return false
            }
        }
    }
})