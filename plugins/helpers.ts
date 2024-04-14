import { makeid, makeIconContents, getColor } from "@/helpers/functions";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      makeid: makeid,
      makeIconContents: makeIconContents,
      getColor: getColor,
    },
  };
});
