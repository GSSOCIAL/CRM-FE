const imports = {
  en: [
    import.meta.glob(`@/locales/en/*.json`, {
      eager: true,
      import: "default",
    }),
    import.meta.glob(`@/modules/*/locales/en.json`, {
      eager: true,
      import: "default",
    }),
    import.meta.glob(`@/modules/custom/*/locales/en.json`, {
      eager: true,
      import: "default",
    }),
  ],
};

/**
 * Deep merge translations
 * @returns
 */
const getLocaleMessages = () => {
  let dictionaries = {} as { [x: string]: any };

  Object.keys(imports).map((code) => {
    let messages = {} as any;

    Object.values(imports[code]).map((dictionary) => {
      Object.values(dictionary).map((translations) => {
        Object.keys(translations).map((key) => {
          messages[key] = { ...messages[key], ...translations[key] };
        });
      });
    });

    dictionaries[code] = { ...messages };
  });

  return dictionaries;
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: getLocaleMessages(),
}));
