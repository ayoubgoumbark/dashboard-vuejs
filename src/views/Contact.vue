<template>
  <div class="auth-wrapper p-4">
    <v-card class="pb-4">
      <!-- logo -->
      <v-row class="px-4 py-4">
        <v-col cols="12" sm="4">
          <strong
            >TEL :<a class="ml-4" href="tel:+212600692937">+212600692937</a
            ><a class="ml-4" href="tel:+212600193552">+212600193552</a></strong
          ></v-col
        >

        <v-col cols="12" sm="4">
          <strong class="d-inline-block"
            >Email :<span class="ml-4">amicale.alyousr@gmail.com</span></strong
          ></v-col
        >
      </v-row>

      <v-card-title class="d-flex justify-center align-center my-3">
        <h4 class="text-2xl font-weight-semibold d-flex">
          ارسل رسالة / Envoyer un Message
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
              v-model="data.adresse"
              outlined
              label="adresse /العنوان"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min]"
              v-model="data.ville"
              outlined
              label="ville /المدينة"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.number, ...rules.numbersize]"
              v-model="data.tel"
              outlined
              label=" Telephone / رقم الهاتف"
              class="mb-3"
            ></v-text-field
          ></v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              :rules="[...rules.required, ...rules.min, ...rules.Email]"
              v-model="data.email"
              outlined
              label="Email / العنوان الالكتروني"
              class="mb-3"
            ></v-text-field
          ></v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-textarea
              outlined
              :rules="[...rules.required, ...rules.min]"
              v-model="data.message"
              label=" message / الرسالة"
              class="mb-3"
            ></v-textarea
          ></v-col>
        </v-row>
        <div class="d-flex align-center justify-center">
          <v-btn @click="send()" class="mt-6 btntheme"> Envoyer </v-btn>
        </div>
      </v-form>
    </v-card>
    <v-snackbar
      app
      v-model="popup.snackbar"
      timeout="3000"
      bottom
      :color="popup.color"
      absolute
    >
      {{ popup.text }}
    </v-snackbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline

import ClientService from "../../src/services/ClientService";

export default {
  name: "contact",
  data() {
    return {
      popup: {
        snackbar: false,
        color: "",
        text: "",
      },
      data: {
        lastName: "",
        firstName: "",
        ville: "",
        message: "",
        tel: "",
        email: "",
        adresse: "",
      },
      valid: true,
      rules: {
        required: [(v) => !!v || ""],
        min: [(v) => !v || v.length > 2 || "  على الاقل 3 حروف "],
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
    send() {
      if (!this.$refs.form.validate()) return;
      this.$root.loading = true;

      console.log("ssd", this.data);

      ClientService.sendMessage(this.data)

        .then((res) => {
          console.log("response message", res);
          this.$root.loading = false;

          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "!! تم الارسال بنجاح";
        })
        .catch((error) => {
          console.log("Erreur d'message");
          console.log(error);
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "!! لم يتم الارسال    ";
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
  background-color: inherit !important;
}

h2 {
  white-space: nowrap;
}
</style>
