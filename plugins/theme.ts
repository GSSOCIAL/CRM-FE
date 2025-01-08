export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      theme: {
        get() {
          var storedTheme =
            localStorage.getItem("scheme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light");
          return storedTheme;
        },
        load() {
          if (this.get()) {
            document.documentElement.setAttribute("scheme", this.get());
            document.body.setAttribute("scheme", this.get());
          }
        },
        set(theme: string) {
          document.documentElement.setAttribute("scheme", theme);
          document.body.setAttribute("scheme", theme);
          localStorage.setItem("scheme", theme);
        },
      },
    },
  };
});
