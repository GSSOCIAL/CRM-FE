export const userHasRole = (role: string) => {
    if (role == "*") return true
    return false
}

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            userHasRole: userHasRole
        }
    }
})