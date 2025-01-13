import { ModuleController } from "@/config/index";

export default class UsersController extends ModuleController {
  route = "users";
  name = "users";
  label = "users.moduleName";
  icon = "linearGrid1";

  createEntry(payload: Object): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.users.createUser(payload);
  }

  getEntries(): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.users.getUsers();
  }

  getEntry(id: string): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.users.getUser(id);
  }

  get listColumns() {
    return [
      {
        prop: "id",
        label: "users.list.id",
        primary: true,
      },
      {
        prop: "email",
        label: "users.fields.email",
      },
    ];
  }

  get createForm() {
    return [
      {
        key: "general",
        tab: "users.tabs.general",
        sections: [
          {
            key: "personal",
            label: "users.sections.personal",
            rows: [
              [
                {
                  id: "email",
                  label: "users.fields.email",
                  placeholder: "",
                },
                {
                  id: "password",
                  label: "users.fields.password",
                  placeholder: "",
                },
              ],
            ],
          },
        ],
      },
    ];
  }

  get viewForm() {
    return [
      {
        key: "general",
        tab: "users.tabs.general",
        sections: [
          {
            key: "personal",
            label: "users.sections.personal",
            rows: [
              [
                {
                  id: "email",
                  label: "users.fields.email",
                  placeholder: "",
                  property: "email",
                },
              ],
            ],
          },
        ],
      },
    ];
  }
}
