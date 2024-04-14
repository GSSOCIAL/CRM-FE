export default defineNuxtPlugin(nuxtApp => {

    return {
        provide: {
            theme: {
                get() {
                    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
                    return storedTheme
                },
                load() {
                    if (this.get()) {
                        document.documentElement.setAttribute('data-theme', this.get())
                    }
                },
                set(theme: string) {
                    document.documentElement.setAttribute('data-theme', theme)
                    localStorage.setItem('theme', theme);
                }
            }
        }
    }
})