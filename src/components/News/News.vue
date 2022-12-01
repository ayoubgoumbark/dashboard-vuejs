<template>
  <v-card class="px-4 pt-4 pb-4 text-center">
    <h4 class="my-4">les Nouveautés / المستجدات</h4>
    <v-alert
      style="width: 100%"
      class="mt-4"
      v-if="News.length == 0"
      dense
      type="info"
    >
      <strong>لا توجد اي مستجدات</strong>
    </v-alert>

    <v-row v-if="News.length != 0">
      <v-col v-for="item in News" :key="item.newsId" cols="12" sm="4">
        <v-card>
          <v-img height="300" :src="`${imageurl}${item.fileName}`">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-btn
            v-if="isAdmin()"
            @click="deleteItem(item)"
            absolute
            right
            class="mx-2"
            fab
            dark
            large
            color="error"
          >
            <v-icon dark> fa-trash </v-icon>
          </v-btn>
          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >هل أنت متأكد من حذف هذا المستجد ؟</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color=" " @click="closeDelete()"> الغاء</v-btn>
          <v-btn color="error" @click="deleteNews()">نعم</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import NewsService from "../../services/NewsService";
import TokenService from "../../services/tokenService";
import { S3Bucket } from "../../services/api";
export default {
  components: {},

  data() {
    return {
      dialogDelete: false,
      News: [],
      imageurl: S3Bucket,
      selecteditem: "",
    };
  },
  created() {
    NewsService.GetNews()
      .then((res) => {
        console.log("ddd", res.data);
        this.News = res.data;
      })
      .catch((error) => {
        console.log("Erreur news");
        console.log(error);
        /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
      });
    this.closeDelete();
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    deleteItem(item) {
      this.dialogDelete = true;
      this.selecteditem = item;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    isAdmin() {
      return TokenService.isAdmin();
    },

    deleteNews() {
      console.log("ggg", this.selecteditem);
      this.$root.loading = true;
      NewsService.deleteNews(this.selecteditem.newsId, sessionStorage["id"])
        .then(() => {
          var editedIndex = this.News.indexOf(this.selecteditem);
          this.News.splice(editedIndex, 1);
          this.$root.loading = false;
        })
        .catch(() => {
          this.$root.loading = false;
          /* this.loading = false;
          this.toastr.error(error.error, 'Error'); */
        });
      this.closeDelete();
    },
  },
};
</script>

<style lang="scss" scoped></style>
