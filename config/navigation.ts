export default {
  sidebar: [
    {
      module: "dashboard",
    },
    {
      module: "clients",
    },
    {
      module: "visits",
    },
    {
      module: "contacts",
    },
    {
      module: "leads",
    },
    {
      module: "tasks",
    },
    {
      module: "reports",
    },
    {
      module: "settings",
    },
  ],
} as {
  [navigation: string]: Array<{
    module: string;
    route?: string;
  }>;
};
