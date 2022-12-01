<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <h2 class="text-2xl font-weight-semibold d-flex align-center">
            تسجيل الدخول / Login
          </h2>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <!--     <p class="text-2xl font-weight-semibold text--primary mb-2">
            Bienvenu! 👋🏻
          </p> -->
          <p class="mb-2">
            veuillez vous connecter avec votre email et votre mot de passe/
            الرجاء تسجيل الدخول باستخدام بريدك الإلكتروني وكلمة المرور
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              outlined
              label="UserName"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="
                isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline
              "
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <!--  <v-checkbox
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox> -->

              <!-- forgot link -->
              <!--  <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Forgot Password?
              </a> -->
            </div>

            <v-btn @click="login" block class="mt-6 btntheme"> Login </v-btn>
          </v-form>
        </v-card-text>

        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2"> créer un nouveau compte / انشاء حساب جديد </span>
          <router-link :to="{ name: 'signup' }"> nouveau compte </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2"> </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline

import loginService from "../services/loginService";
import tokenService from "../services/tokenService";
import { mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";

export default {
  name: "login",
  data() {
    return {
      isPasswordVisible: false,
      username: "",
      password: "",

      icons: {
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    };
  },
  methods: {
    login() {
      let form = {};
      form["username"] = this.username;
      form["password"] = this.password;

      loginService
        .login(form)

        .then((res) => {
          console.log("authentification avec succès");
          console.log("response login", res);

          sessionStorage.setItem("jwt", "" + res.data.token);
          sessionStorage.setItem("id", "" + res.data.id);

          if (tokenService.isAdmin() == false) {
            this.$router.push("/User");
          } else {
            this.$router.push("/Admin");
          }

          /*  sessionStorage.setItem("jwt", "" + res.headers["authorization"]); */

          /*    token = response.headers['authorization']; */

          // this.showChat = true;
          /*     this.$store.commit('setUsername',MyTokenService.payload(sessionStorage['jwt']).sub) */
        })
        .catch((error) => {
          console.log("Erreur d'authentification");
          console.log(error);
          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #dfab6a !important;
}

.btntheme {
  background-color: #dfab6a !important;
  color: white !important;
}
</style>
