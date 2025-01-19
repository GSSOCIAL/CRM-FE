<template>
  <PageWrapper>
    <div class="loginPageContainer">
      <div class="loginPageHeader">
        <div class="loginPageLabel">{{ $t("login.Welcome") }}</div>
        <div class="loginPageDescription">
          Welcome back! Please enter your login credentials
        </div>
      </div>
      <div class="loginPageForm">
        <FormBuilder>
          <Field placeholder="Email" v-model="form.email" />
          <div class="loginPagePasswordField">
            <Field
              type="password"
              placeholder="Password"
              v-model="form.password"
            />
            <nuxt-link to="/">Forgot password?</nuxt-link>
          </div>
          <div class="loginPageFormActions">
            <Button
              @click="
                () => {
                  login();
                }
              "
              >Login</Button
            >
          </div>
        </FormBuilder>
      </div>
      <div class="loginPageActions">
        Don't have account? <nuxt-link to="/">Sign up for free</nuxt-link>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
const nuxtApp = useNuxtApp();

const form = ref({
  email: "",
  password: "",
});

const login = () => {
  nuxtApp.$vertex.api.identity
    .login({ email: form.value.email, password: form.value.password })
    .then((response) => {
      if (response && response.token) {
        nuxtApp.$store.identity.setToken(response.token);
        nuxtApp.$store.identity.setUser({
          id: response.user.id,
          email: response.user.email,
        });
        //Navigate to portal
        navigateTo("/portal");
      }
    });
};
</script>

<style scoped lang="scss">
.loginPageContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 64px 32px;
  > .loginPageHeader {
    > .loginPageLabel {
      font-size: 32px;
      color: var(--text-primary);
      font-weight: bold;
    }
    > .loginPageDescription {
      @include label;
      font-size: 14px;
    }
  }
  > .loginPageForm {
    padding: 32px 0px;
    > .loginPagePasswordField {
    }
    > .loginPageFormActions {
    }
  }
  > .loginPageActions {
  }
}
</style>
