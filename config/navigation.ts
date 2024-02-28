export default {
    sidebar: [
        {
            module: "dashboard"
        },
        {
            module: "contacts"
        },
    ]
} as {[navigation: string]: Array<{ 
    module: string 
    route?: string
}>}