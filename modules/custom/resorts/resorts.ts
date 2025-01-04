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
}
