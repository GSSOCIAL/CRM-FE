const controller = useModuleController();
const countries = useLists("countries");
const cities = useLists("cities");

export default class HotelsController extends controller {
  override route = "hotels";
  override name = "hotels";
  override label = "hotels.moduleName";
  override icon = "linearGrid1";

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
        tab: "hotels.tabs.general",
        sections: [
          {
            key: "general",
            label: "hotels.sections.general",
            rows: [
              [
                {
                  id: "name",
                  label: "hotels.fields.name",
                },
              ],
              [
                {
                  id: "description",
                  label: "hotels.fields.description",
                  type: "textarea",
                },
              ],
              [
                {
                  id: "country",
                  label: "hotels.fields.country",
                  type: "enum",
                  options: countries.map((option) => {
                    return {
                      value: option.key,
                      label: `countries.${option.key}`,
                    };
                  }),
                },
                {
                  id: "city",
                  label: "hotels.fields.city",
                  type: "enum",
                  options: (args) => {
                    if (args.country) {
                      if (typeof cities[args.country] != "undefined") {
                        return cities[args.country];
                      }
                    }

                    return [];
                  },
                },
                {
                  id: "address",
                  label: "hotels.fields.address",
                  placeholder: "",
                },
              ],
            ],
          },
          {
            key: "details",
            label: "hotels.sections.details",
            rows: [
              [
                {
                  id: "checkin",
                  label: "hotels.fields.checkin",
                  type: "time",
                },
                {
                  id: "checkout",
                  label: "hotels.fields.checkout",
                  type: "time",
                },
              ],
            ],
          },
        ],
      },
      {
        key: "territory",
        tab: "hotels.sections.territory",
        sections: [
          {
            key: "territory",
            label: "hotels.sections.territory",
            rows: [
              [
                {
                  id: "restaurant",
                  label: "hotels.fields.restaurant",
                  type: "checkboxGroup",
                  options: [
                    {
                      value: "restaurant",
                      label: "hotels.fields.restaurant",
                    },
                    {
                      value: "bar",
                      label: "hotels.fields.bar",
                    },
                  ],
                },
                {
                  id: "wifi",
                  label: "hotels.fields.wifi",
                  type: "checkbox",
                },
              ],
            ],
          },
        ],
      },
    ];
  }
}
