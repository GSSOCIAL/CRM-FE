import ModuleConfig from "@/config/index";
import type { TableBuilderColumn } from "@/interfaces/table";
import type { ModuleFilter } from "@/interfaces/filter";

export default class ResortsConfig extends ModuleConfig {
  route = "resorts";
  label = "resorts.moduleName";
  icon = "linearGrid1";

  get columns(): Array<TableBuilderColumn> {
    return [
      {
        prop: "id",
        label: "resorts.list.id",
      },
    ];
  }

  get createForm() {
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
                  label: "resorts.fields.name-label",
                  placeholder: "resorts.fields.name-placeholder",
                },
              ],
            ],
          },
        ],
      },
    ];
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      return resolve(payload);
    });
  }
}
