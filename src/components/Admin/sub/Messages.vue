<template>
  <v-card class="px-4 pt-4 pb-4 text-center">
    <h3 class="my-4">Messages</h3>

    <v-spacer></v-spacer>
    <v-data-table
      :sort-desc.sync="date"
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
      <template v-slot:item.description="{ item }">
        <span class="cellstyle">{{ item.description }}</span>
      </template>
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

          <v-btn class="ml-2" small color="error" @click="deleteItem(item)"
            >حدف<v-icon small class="ml-2">fa-trash-alt </v-icon></v-btn
          >
        </div>
      </template>
      <template v-slot:item.senderFullName="{ item }">
        <div class="d-flex">
          <v-btn class="mr-2" small color="info" @click="getClientInfo(item)"
            >معلومات المرسل<v-icon small class="ml-2">fa-user </v-icon></v-btn
          >{{ item.senderFullName }}
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

    <v-dialog
      v-model="infomodel"
      transition="dialog-top-transition"
      max-width="600"
    >
      <v-card>
        <v-toolbar color="#dfab6a" dark>معلومات المنخرط</v-toolbar>
        <v-card-text>
          <div class="text-h6 py-4 px-4">
            <v-row justify="center"
              ><v-col cols="6" sm="6">الاسم الشخصي</v-col
              ><v-col cols="6" sm="6">{{ info.firstName }}</v-col></v-row
            >
            <v-row justify="center"
              ><v-col cols="6" sm="6">الاسم العائلي </v-col
              ><v-col cols="6" sm="6">{{ info.lastName }}</v-col></v-row
            >
            <v-row justify="center"
              ><v-col cols="6" sm="6">العنوان</v-col
              ><v-col cols="6" sm="6">{{ info.adresse }}</v-col></v-row
            >
            <v-row justify="center"
              ><v-col cols="6" sm="6">المدينة</v-col
              ><v-col cols="6" sm="6">{{ info.ville }}</v-col></v-row
            >

            <v-row justify="center"
              ><v-col cols="6" sm="6">العنوان الالكتروني</v-col
              ><v-col cols="6" sm="6">{{ info.email }}</v-col></v-row
            >

            <v-row justify="center"
              ><v-col cols="6" sm="6">رقم الهاتف</v-col
              ><v-col cols="6" sm="6">{{ info.tel }}</v-col></v-row
            >
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="#dfab6a" dark @click="infomodel = false">ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import AdminService from "../../../services/AdminService";

export default {
  data: () => ({
    info: {},
    infomodel: false,
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
      {
        text: "الوصف",
        value: "description",
        width: "30%",
        sortable: false,
        class: "cellstyle",
      },
      { text: "الملف", value: "fileName", width: "30%", sortable: false },
    ],
    Messages: [],
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    getClientInfo(item) {
      this.$root.loading = true;
      AdminService.getinfoClient(item.senderId)
        .then((res) => {
          this.$root.loading = false;
          console.log("fff", res.data);
          this.info = res.data;
          this.infomodel = true;
        })
        .catch(() => {
          this.$root.loading = false;
          this.popup.snackbar = true;
          this.popup.color = "error";
          this.popup.text = "";
        });
    },
    initialize() {
      AdminService.getMessages(sessionStorage["id"])
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
      AdminService.DeleteMessage(
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
      AdminService.downoald(item.id, item.fileName, sessionStorage["id"])
        .then((res) => {
          this.$root.loading = false;

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
