import ModuleConfig from "@/config/index";
import type { TableBuilderColumn } from "@/interfaces/table";
import type { ModuleFilter } from "@/interfaces/filter"

export default class ContactsConfig extends ModuleConfig{
    route = "/portal/contacts"
    label = "Contacts"
    icon = "linearGrid1"

    get columns(): Array<TableBuilderColumn>{
        return [
            {
                prop: "id",
                label: "Identification",
            },
            {
                prop: "firstName",
                label: "First Name",
            },
            {
                prop: "lastName",
                label: "Last Name",
                isDefaultColumn: false,
            },
            {
                prop: "dateOfBirth",
                label: "Date of Birth",
                isDefaultColumn: false,
            },
        ]
    }

    get filters(): Array<ModuleFilter>{
        return [
            {
                prop: "firstName",
                label: "First Name",
                type: "text",
                placeholder: "First Name"
            },
            {
                prop: "lastName",
                label: "Last Name",
                type: "text",
                placeholder: "Last Name"
            }
        ]
    }
}