export default {
  sidebar: [
    {
      module: "dashboard",
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
  ],
} as {
  [navigation: string]: Array<{
    module: string;
    route?: string;
  }>;
};
