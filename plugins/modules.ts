import DashboardConfig from "~/config/modules/dashboard";
import ContactsConfig from "~/config/modules/contacts";

export default defineNuxtPlugin( (nuxtApp) => {
    const modules = {
        dashboard: new DashboardConfig(),
        contacts: new ContactsConfig(),
    }
    return {
        provide: {
            modules: modules,
            getModule : (module: keyof typeof modules) => {
                return modules[module] || null
            }
        }
    }
})