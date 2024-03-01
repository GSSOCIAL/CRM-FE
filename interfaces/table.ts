export interface TableBuilderColumn{
    prop: string
    label: string
    isDefaultColumn?: Boolean
    isDisplayed?: Boolean
    default?: string
    clickable?: Boolean
    callback?: Function
    order?: number
}