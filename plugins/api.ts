import ContactsHttpService from "@/api/contacts";
import IdentityHttpService from "@/api/identity";
import ResortsHttpService from "@/api/custom/resorts";
import UsersHttpService from "@/api/users";

import type BaseHttpService from "~/api/base";

export default defineNuxtPlugin((nuxtApp) => {
  const beforeRequest = (context) => {
    //Add Bearer to header
    context.options.headers = Object.assign(context.options.headers, {
      Authorization: `Bearer ${nuxtApp.$store.identity.accessToken}`,
    });
  };
  const afterRequest = (context: any) => {
    if (context?.response?.ok === false) {
      if (context.response?.status == 401) {
        //Break session & logout
        const i18n = nuxtApp.$i18n;
        nuxtApp.hooks.callHook("toast:message", {
          message: i18n.te("messages.sessionExpired")
            ? i18n.t("messages.sessionExpired")
            : i18n.t("default.messages.sessionExpired"),
          type: "fail",
          dismissible: false,
        });
        nuxtApp.$store.identity.breakSession();
        navigateTo("/login");
      }
    }
  };
  const onResponseFailed = () => {};

  return {
    provide: {
      api: {
        contacts: new ContactsHttpService()
          .beforeRequest(beforeRequest)
          .afterRequest(afterRequest)
          .build(),
        identity: new IdentityHttpService()
          .beforeRequest(beforeRequest)
          .afterRequest(afterRequest)
          .build(),
        resorts: new ResortsHttpService()
          .beforeRequest(beforeRequest)
          .afterRequest(afterRequest)
          .build(),
        users: new UsersHttpService()
          .beforeRequest(beforeRequest)
          .afterRequest(afterRequest)
          .build(),
      },
    },
  };
});
