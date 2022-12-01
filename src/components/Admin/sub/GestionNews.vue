<template>
  <v-card class="px-4 pt-4 text-center">
    <h3 class="my-4">créer une Nauveauté</h3>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8">
          <v-file-input
            @change="onFileChange($event)"
            accept="image/*"
            label="اختر صورة"
            :rules="rulesselect.required"
          ></v-file-input
        ></v-col>
        <v-col cols="12" sm="8">
          <v-text-field
            v-model="data.title"
            label="العنوان"
            outlined
            :rules="rulesselect.required"
          ></v-text-field>
        </v-col>

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
            Ajouter
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
import AdminService from "../../../services/AdminService";
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
        userId: sessionStorage["id"],
        title: "",
        description: "",
      },
    };
  },
  methods: {
    geListUsers() {
      AdminService.GetListUsers()
        .then((res) => {
          console.log("rees", res.data);
          this.users = res.data;
        })
        .catch(() => {
          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
    },

    Transfer() {
      if (!this.$refs.form.validate()) return;
      this.$root.loading = true;
      const formData = new FormData();

      formData.append("file", this.file);

      var data = new Blob([JSON.stringify(this.data)], {
        type: "application/json",
      });

      formData.append("data", data);

      AdminService.AddNews(formData)
        .then(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "!! تم اضافة المستجد بنجاح";
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "!! لم تتم الاضافة    ";

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
