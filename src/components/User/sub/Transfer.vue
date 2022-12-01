<template>
  <v-card class="px-4 pt-4 text-center">
    <h3 class="my-4">envoyer des pièces jointes</h3>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8">
          <v-file-input
            @change="onFileChange($event)"
            accept="image/*,.pdf,.xlsx, .xls, .csv"
            label="اختر ملف"
            :rules="rulesselect.required"
          ></v-file-input
        ></v-col>

        <v-col cols="12" sm="8"
          ><v-textarea
            outlined
            v-model="data.description"
            label="وصف"
            :rules="rulesselect.required"
          ></v-textarea
        ></v-col>

        <v-col cols="12" sm="8">
          <v-btn depressed class="btntheme w-full" @click="Transfer()">
            Envoyer
          </v-btn></v-col
        >
      </v-row>
    </v-form>
    <v-snackbar
      app
      v-model="popup.snackbar"
      timeout="3000"
      top
      :color="popup.color"
      absolute
    >
      {{ popup.text }}
    </v-snackbar>
  </v-card>
</template>

<script>
import UserService from "../../../services/UserService";
export default {
  components: {},
  props: {},
  data() {
    return {
      popup: {
        snackbar: false,
        color: "",
        text: "",
      },

      rulesselect: {
        required: [(v) => !!v || ""],
      },
      valid: true,

      file: null,
      data: {
        sender: sessionStorage["id"],
        resever: "",
        description: "",
      },
    };
  },
  methods: {
    Transfer() {
      if (!this.$refs.form.validate()) return;
      this.$root.loading = true;
      const formData = new FormData();

      formData.append("file", this.file);

      var data = new Blob([JSON.stringify(this.data)], {
        type: "application/json",
      });

      formData.append("data", data);

      UserService.TransferFile(formData)
        .then(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "!! تم الارسال بنجاح";
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "!! لم يتم الارسال ";

          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
    },
    onFileChange(e) {
      this.file = e;
    },
  },
};
</script>

<style lang="scss" scoped></style>
