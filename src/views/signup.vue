<template>
  <div class="auth-wrapper p-4">
    <v-card class="auth-card">
      <!-- logo -->
      <v-card-title class="d-flex justify-center align-center">
        <h4 class="text-2xl font-weight-semibold d-flex">
          انشاء حساب جديد/ Inscription
        </h4>
      </v-card-title>

      <!-- login form -->

      <v-form class="px-6" ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.firstName"
              outlined
              label="Prenom / الاسم الشخصي"
              class="mb-3"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.lastName"
              outlined
              label="Nom / الاسم العائلي"
              class="mb-3"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.userName"
              outlined
              label="اسم المستخدم"
              class="mb-3"
              persistent-hint
              hint="ستستعمله في تسجيل الدخول"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.adresse"
              outlined
              label="العنوان"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.ville"
              outlined
              label="المدينة"
              class="mb-3"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.number, ...rules.numbersize]"
              v-model="data.tel"
              outlined
              label="رقم الهاتف"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min, ...rules.Email]"
              v-model="data.email"
              outlined
              label=" العنوان الالكتروني"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password / كلمة المرور"
              placeholder="············"
              :append-icon="isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...validatePassword(), ...rules.min]"
              v-model="ConfirmPassword"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="تاكيد كلمة المرور"
              placeholder="············"
              :append-icon="isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field
          ></v-col>
        </v-row>
        <div class="d-flex align-center justify-center">
          <v-btn @click="signup()" class="mt-6 btntheme">
            inscrivez-vous
          </v-btn>
        </div>
      </v-form>

      <v-card-text class="d-flex align-center justify-center flex-wrap mt-8">
        <router-link :to="{ name: 'login' }"> Login /تسجيل الدخول </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline

import UserService from "../services/UserService";

export default {
  name: "signup",
  data() {
    return {
      ConfirmPassword: "",
      isPasswordVisible: false,
      data: {
        password: "",
        lastName: "",
        firstName: "",
        userName: "",
        ville: "",
        tel: "",
        email: "",
        adresse: "",
      },
      valid: true,
      rules: {
        required: [(v) => !!v || ""],
        min: [(v) => v.length > 2 || "  على الاقل 3 حروف "],
        Email: [
          (v) =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail invalid",
        ],
        number: [(v) => Number.isInteger(Number(v)) || "invalide"],
        numbersize: [(v) => !v || v.length > 9 || "invalide"],
      },
    };
  },
  methods: {
    signup() {
      if (!this.$refs.form.validate()) return;
      this.$root.loading = true;
      UserService.signup(this.data)

        .then((res) => {
          console.log("authentification avec succès");
          console.log("response login", res);

          this.$router.push("/login");
        })
        .catch((error) => {
          console.log("Erreur d'authentification");
          console.log(error);
          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
      this.$root.loading = false;
    },

    validatePassword() {
      return [
        this.data.password == this.ConfirmPassword ||
          "invalide mote de pass / كلمة المرور غير مطابقة",
      ];
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

h2 {
  white-space: nowrap;
}
</style>
