import ModuleConfig from "@/config/index";
import { TableBuilderColumn } from "@/types";

export default class ContactsConfig extends ModuleConfig{
    route = "/contacts"
    label = "Contacts"
    icon = "linearGrid1"

    get columns(): Array<TableBuilderColumn>{
        return [
            {
                prop: "id",
                label: "Name"
            }
        ]
    }
}