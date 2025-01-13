export default defineNuxtRouteMiddleware((to, from) => {
  const { $store } = useNuxtApp();

  if (!$store.identity.accessToken && to?.name != "login") {
    return navigateTo("/login");
  }
});
