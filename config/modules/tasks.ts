import ModuleConfig from "@/config/index";
import type { TableBuilderColumn } from "@/interfaces/table";
import type { ModuleFilter } from "@/interfaces/filter";

export default class TasksConfig extends ModuleConfig {
  route = "tasks";
  label = "tasks.moduleName";
  icon = "linearGrid1";

  get columns(): Array<TableBuilderColumn> {
    return [];
  }

  get filters(): Array<ModuleFilter> {
    return [];
  }
}

//Display calendar
