import DashboardConfig from "~/config/modules/dashboard";
import ContactsConfig from "~/config/modules/contacts";
import LeadsConfig from "~/config/modules/leads";
import TasksConfig from "~/config/modules/tasks";
import ReportsConfig from "~/config/modules/reports";
import SettingsConfig from "~/config/modules/settings";

export default defineNuxtPlugin((nuxtApp) => {
  const modules = {
    dashboard: new DashboardConfig(),
    contacts: new ContactsConfig(),
    leads: new LeadsConfig(),
    tasks: new TasksConfig(),
    reports: new ReportsConfig(),
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
