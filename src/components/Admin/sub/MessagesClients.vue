<template>
  <div class="text-center">
    <h3 class="my-6">Messages - رسائل الغيرالمنخرطين</h3>
    <v-row>
      <v-col
        v-for="item in messages"
        :key="item.id"
        cols="12"
        sm="6"
        class="d-flex child-flex"
      >
        <v-card elevation="4" class="px-4 py-4 text-center" flat>
          <v-row justify="center"
            ><v-col cols="6" sm="6">الاسم الشخصي</v-col
            ><v-col cols="6" sm="6">{{ item.firstName }}</v-col></v-row
          >
          <v-row justify="center"
            ><v-col cols="6" sm="6">الاسم العائلي </v-col
            ><v-col cols="6" sm="6">{{ item.lastName }}</v-col></v-row
          >
          <v-row justify="center"
            ><v-col cols="6" sm="6">العنوان</v-col
            ><v-col cols="6" sm="6">{{ item.adresse }}</v-col></v-row
          >
          <v-row justify="center"
            ><v-col cols="6" sm="6">المدينة</v-col
            ><v-col cols="6" sm="6">{{ item.ville }}</v-col></v-row
          >

          <v-row justify="center"
            ><v-col cols="6" sm="6">العنوان الالكتروني</v-col
            ><v-col cols="6" sm="6">{{ item.email }}</v-col></v-row
          >

          <v-row justify="center"
            ><v-col cols="6" sm="6">رقم الهاتف</v-col
            ><v-col cols="6" sm="6">{{ item.tel }}</v-col></v-row
          >

          <v-row justify="center" align="center"
            ><v-col cols="6" sm="6">الرسالة</v-col
            ><v-col cols="6" sm="6"
              ><strong class="d-block">{{ item.Date }}</strong
              >{{ item.message }}</v-col
            ></v-row
          >
          <v-card-actions>
            <v-btn
              @click="deleteItem(item)"
              right
              class="mx-2"
              fab
              dark
              large
              color="error"
            >
              <v-icon dark> fa-trash </v-icon>
            </v-btn>
          </v-card-actions>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >هل أنت متأكد من حذف هذه الرسالة ؟</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color=" " @click="closeDelete()"> الغاء</v-btn>
                <v-btn color="error" @click="deleteMessage()">نعم</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
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
      selecteditem: "",
      dialogDelete: false,
      messages: [],
    };
  },
  methods: {
    deleteMessage() {
      this.$root.loading = true;
      console.log("ggg", this.selecteditem);
      AdminService.DeleteMessageClient(this.selecteditem.id)
        .then(() => {
          var editedIndex = this.messages.indexOf(this.selecteditem);
          this.messages.splice(editedIndex, 1);
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "! تم الحدف  بنجاح";
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "! لم يتم  الحدف";
          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
      this.closeDelete();
    },
    initialize() {
      AdminService.getMessagesClients()
        .then((res) => {
          console.log("fff", res.data);
          this.messages = res.data;
        })
        .catch(() => {});
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.selecteditem = item;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },
};
</script>

<style lang="scss" scoped></style>
