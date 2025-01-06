export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      theme: {
        get() {
          var storedTheme =
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light");
          return storedTheme;
        },
        load() {
          if (this.get()) {
            document.documentElement.setAttribute("theme", this.get());
            document.body.setAttribute("theme", this.get());
          }
        },
        set(theme: string) {
          document.documentElement.setAttribute("theme", theme);
          document.body.setAttribute("theme", theme);
          localStorage.setItem("theme", theme);
        },
      },
    },
  };
});
