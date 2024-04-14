import ModuleConfig from "@/config/index";
import type { TableBuilderColumn } from "@/interfaces/table";
import type { ModuleFilter } from "@/interfaces/filter";

export default class SettingsConfig extends ModuleConfig {
  route = "settings";
  label = "settings.moduleName";
  icon = "linearGrid1";

  get columns(): Array<TableBuilderColumn> {
    return [];
  }

  get filters(): Array<ModuleFilter> {
    return [];
  }
}
