import en from "@/locales/en";
import ua from "@/locales/ua";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    ua,
  },
}));
