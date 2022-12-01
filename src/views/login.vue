<template>
  <div class="auth-wrapper p-4">
    <v-card class="auth-card">
      <!-- logo -->
      <v-card-title class="mb-4 d-flex align-center justify-center">
        <h4 class="text-2xl font-weight-semibold d-flex">
          تسجيل الدخول / Login
        </h4>
      </v-card-title>

      <!-- login form -->

      <v-form class="px-6" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :rules="rules.required"
          v-model="username"
          outlined
          label="Utilisateur"
          hide-details
          class="mb-3"
        ></v-text-field>

        <v-text-field
          :rules="rules.required"
          v-model="password"
          outlined
          :type="isPasswordVisible ? 'text' : 'password'"
          label="Password"
          placeholder="············"
          :append-icon="isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'"
          hide-details
          @click:append="isPasswordVisible = !isPasswordVisible"
        ></v-text-field>

        <v-btn @click="login" block class="mt-6 btntheme"> Login </v-btn>
      </v-form>

      <v-card-text class="mt-8 text-center">
        <router-link :to="{ name: 'signup' }">
          créer un nouveau compte / انشاء حساب جديد
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline

import UserService from "../services/UserService";
import tokenService from "../services/tokenService";

export default {
  name: "login",
  data() {
    return {
      isPasswordVisible: false,
      username: "",
      password: "",
      rules: {
        required: [(v) => !!v || ""],
      },
      valid: true,
    };
  },
  methods: {
    login() {
      if (!this.$refs.form.validate()) return;
      this.$root.loading = true;
      let form = {};
      form["username"] = this.username;
      form["password"] = this.password;

      UserService.login(form)

        .then((res) => {
          console.log("authentification avec succès");
          console.log("response login", res);

          sessionStorage.setItem("jwt", "" + res.data.token);
          sessionStorage.setItem("id", "" + res.data.id);

          if (tokenService.isAdmin() == false) {
            this.$router.push("/User/Messages");
          } else {
            this.$router.push("/Admin/Messages");
          }
        })
        .catch((error) => {
          console.log("Erreur d'authentification");
          console.log(error);

          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
      this.$root.loading = false;
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
  background-color: inherit !important;
}
</style>
