import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useIdentityStore = defineStore("identity", {
  state: () => ({
    token: useStorage("accesstoken", "", localStorage, {
      mergeDefaults: true,
    }),
    currentUser: useStorage("user", { id: "", email: "" }, localStorage, {
      mergeDefaults: true,
    }),
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: { id: string; email: string }) {
      this.currentUser = user;
    },
    breakSession() {
      this.token = "";
      this.currentUser = { id: "", email: "" };
    },
  },
  getters: {
    accessToken: (state) => state.token,
    user: (state) => state.currentUser,
  },
});
