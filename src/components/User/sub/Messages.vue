<template>
  <v-card class="px-4 pt-4 pb-4 text-center">
    <h3 class="my-4">Messages</h3>

    <v-spacer></v-spacer>
    <v-data-table
      no-data-text="aucun élément trouver"
      :headers="headers"
      :items="Messages"
      sort-by="Date"
      class="elevation-1"
      :item-class="itemRowBackground"
      :footer-props="{
        'items-per-page-text': '',
      }"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="500px"> </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >هل أنت متأكد من حذف هذا الملف ؟</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color=" " @click="closeDelete()"> الغاء</v-btn>
                <v-btn color="error" @click="deleteItemConfirm()">نعم</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.fileName="{ item }">
        <div class="d-flex">
          <v-btn small color="success mr-2  " @click="downoalditem(item)">
            تحميل<v-icon small class="ml-2"
              >fa-cloud-download-alt</v-icon
            ></v-btn
          >

          <v-btn small color="error" @click="deleteItem(item)"
            >حدف<v-icon small class="ml-2">fa-trash-alt </v-icon></v-btn
          >
        </div>
      </template>
    </v-data-table>
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
  data: () => ({
    popup: {
      snackbar: false,
      color: "",
      text: "",
    },

    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "التاريخ",
        align: "start",
        sortable: false,
        value: "date",
        width: "20%",
      },
      {
        text: "المرسل",
        value: "senderFullName",
        width: "20%",
        sortable: false,
      },
      { text: "الوصف", value: "description", width: "30%", sortable: false },
      { text: "الملف", value: "fileName", width: "30%", sortable: false },
    ],
    Messages: [],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    initialize() {
      UserService.getMessages(sessionStorage["id"])
        .then((res) => {
          console.log("fff", res.data);
          this.Messages = res.data;
        })
        .catch(() => {
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "! لم يتم تحميل البيانات بنجاح";
        });
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.selecteditem = item;
    },

    deleteItemConfirm() {
      this.$root.loading = true;
      UserService.DeleteMessage(
        this.selecteditem.fileName,
        this.selecteditem.id,
        sessionStorage["id"]
      )
        .then(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "! تم الحدف بنجاح";
          var editedIndex = this.Messages.indexOf(this.selecteditem);
          this.Messages.splice(editedIndex, 1);
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "error";

          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
    downoalditem(item) {
      this.$root.loading = true;
      UserService.downoald(item.id,item.fileName, sessionStorage["id"])
        .then((res) => {
          this.$root.loading = false;
          console.log("hhh", res);

          const link = document.createElement("a");
          link.href = res.data;
          link.setAttribute("download", item.fileName); //or any other extension
          document.body.appendChild(link);
          link.click();
          this.popup.snackbar = true;
          this.popup.color = "success";
          this.popup.text = "!! تم  التحميل بنجاح";
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "!! لم يتم التحميل ";

          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
    },
    itemRowBackground(item) {
      if (!item.vu) return "greenRow";
      else return "";
    },
  },

  created() {
    this.initialize();
  },
};
</script>

<style lang="scss" scoped></style>
