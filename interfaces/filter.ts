export const FilterType = {
    text: "text"
} as const

export interface ModuleFilter{
    prop: string
    label: string
    type: keyof typeof FilterType
    placeholder: string
}