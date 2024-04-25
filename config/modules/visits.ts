import ModuleConfig from "@/config/index";
import type { TableBuilderColumn } from "@/interfaces/table";
import type { ModuleFilter } from "@/interfaces/filter";

export default class VisitsConfig extends ModuleConfig {
  route = "visits";
  label = "visits.moduleName";
  icon = "linearGrid1";

  get columns(): Array<TableBuilderColumn> {
    return [];
  }

  get filters(): Array<ModuleFilter> {
    return [
      {
        prop: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "First Name",
      },
      {
        prop: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
      },
    ];
  }
}
