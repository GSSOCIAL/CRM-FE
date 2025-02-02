const controller = useModuleController();

export default class ResortsController extends controller {
  override route = "resorts";
  override name = "resorts";
  override label = "resorts.moduleName";
  override icon = "linearGrid1";

  override getEntries(): Promise<unknown> {
    const { $vertex } = useNuxtApp();
    return $vertex.api.resorts.getEntries();
  }

  override get listColumns() {
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

  override get createForm() {
    return [
      {
        key: "general",
        tab: "resorts.tabs.general",
        sections: [
          {
            key: "general",
            label: "resorts.sections.general",
            rows: [
              [
                {
                  id: "name",
                  label: "resorts.fields.name",
                },
              ],
              [
                {
                  id: "description",
                  label: "resorts.fields.description",
                  type: "textarea",
                },
              ],
              [
                {
                  id: "country",
                  label: "resorts.fields.country",
                  type: "enum",
                  options: [].map((option) => {
                    return {
                      value: option.key,
                      label: `countries.${option.key}`,
                    };
                  }),
                },
                {
                  id: "city",
                  label: "resorts.fields.city",
                  type: "enum",
                  options: (args) => {
                    console.log(args);

                    return [];
                  },
                },
                {
                  id: "address",
                  label: "resorts.fields.address",
                  placeholder: "",
                },
              ],
            ],
          },
          {
            key: "details",
            label: "resorts.sections.details",
            rows: [
              [
                {
                  id: "includes",
                  label: "resorts.fields.includes-label",
                  placeholder: "resorts.fields.includes-placeholder",
                  type: "list",
                },
              ],
            ],
          },
        ],
      },
    ];
  }
  /*
  override route = "resorts";
  override name = "resorts";
  override label = "resorts.moduleName";
  override icon = "linearGrid1";

  override createEntry(payload: Object): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.resorts.createEntry(payload);
  }

  override getEntries(): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.resorts.getEntries();
  }

  override getEntry(id: string): Promise<unknown> {
    const { $api } = useNuxtApp();
    return $api.resorts.getEntry(id);
  }

  override get listColumns() {
    return [
      {
        prop: "id",
        label: "resorts.list.id",
        primary: true,
      },
      {
        prop: "name",
        label: "resorts.fields.name",
      },
    ];
  }

  override get createForm() {
    return [
      {
        key: "general",
        tab: "resorts.tabs.general",
        sections: [
          {
            key: "general",
            label: "resorts.sections.general",
            rows: [
              [
                {
                  id: "name",
                  label: "resorts.fields.name",
                },
              ],
              [
                {
                  id: "country",
                  label: "resorts.fields.country",
                  type: "enum",
                  options: [].map((option) => {
                    return {
                      value: option.key,
                      label: `countries.${option.key}`,
                    };
                  }),
                },
                {
                  id: "city",
                  label: "resorts.fields.city",
                  type: "enum",
                  options: (args) => {
                    console.log(args);

                    return [];
                  },
                },
                {
                  id: "address",
                  label: "resorts.fields.address",
                  placeholder: "",
                },
              ],
            ],
          },
        ],
      },
    ];
  }

  override get viewForm() {
    return [
      {
        key: "general",
        tab: "resorts.tabs.general",
        sections: [
          {
            key: "general",
            label: "resorts.sections.general",
            rows: [
              [
                {
                  id: "name",
                  label: "resorts.fields.name",
                  placeholder: "",
                  property: "name",
                },
              ],
            ],
          },
        ],
      },
    ];
  }
    */
}
