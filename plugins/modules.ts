import DashboardConfig from "~/config/modules/dashboard";
import ContactsConfig from "~/config/modules/contacts";
import SettingsConfig from "~/config/modules/settings";

export default defineNuxtPlugin((nuxtApp) => {
  const modules = {
    dashboard: new DashboardConfig(),
    contacts: new ContactsConfig(),
    settings: new SettingsConfig(),
  };
  return {
    provide: {
      modules: modules,
      getModule: (module: keyof typeof modules) => {
        return modules[module] || null;
      },
    },
  };
});
