export interface TableBuilderColumn{
    prop: string
    label: string
    isDefaultColumn?: Boolean
    default?: string
    clickable?: Boolean
    callback?: Function
}