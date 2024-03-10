import ContactsHttpService from "@/api/contacts"
import IdentityHttpService from "@/api/identity"
import type BaseHttpService from "~/api/base"

export default defineNuxtPlugin(nuxtApp => {
    const beforeRequest = (context) => {
        //Add Bearer to header
        context.options.headers = Object.assign(context.options.headers,{
            'Authorization': `Bearer ${nuxtApp.$store.identity.accessToken}`
        })
    }
    const afterRequest = () => {
        
    }
    const onResponseFailed = () => {
        
    }

    return {
        provide: {
            api: {
                contacts: new ContactsHttpService().beforeRequest(beforeRequest).afterRequest(afterRequest).build(),
                identity: new IdentityHttpService()
            }
        }
    }
})