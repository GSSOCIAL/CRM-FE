import ContactsHttpService from "@/api/contacts"

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            api: {
                contacts: new ContactsHttpService({
                    baseURL: `https://localhost:7036/api/`
                })
            }
        }
    }
})