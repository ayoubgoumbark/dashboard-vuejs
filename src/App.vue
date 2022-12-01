<template>
  <v-app>
    <!--  <v-navigation-drawer app>-->
    <loading v-if="$root.loading"></loading>

    <v-navigation-drawer
      v-if="isMobile && !IsAuth"
      app
      class="sidebar"
      v-model="drawer"
      temporary
      width="290"
      :bottom="isMobile"
    >
      <sidebar :Menu="Menu" />
    </v-navigation-drawer>
    <app-bar
      :username="username"
      :isAdmin="isAdmin"
      :IsAuth="IsAuth"
      :isMobile="isMobile"
      :Menu="Menu"
      v-on:menuToggle="MenuSwitch"
      v-on:logout="logout"
    ></app-bar>
    <v-main>
      <!-- Sizes your content based upon application components -->
      <v-container> <router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/appbar/appbar.vue";

import sidebar from "./components/sidebar/sidebar.vue";
import tokenService from "./services/tokenService";
import loading from "./components/loading.vue";
export default {
  name: "Home",

  components: {
    "app-bar": appbar,
    loading,
    sidebar,
  },
  data() {
    return {
      username: null,
      isAdmin: null,
      IsAuth: false,
      isMobile: false,
      drawer: false,
      Menu: [],
      MenuUser: [
        {
          icon: "fa-paper-plane",
          title: "envoyer une fichier - ارسال ملف",
          link: "/User/Transfer",
        },
        {
          icon: "fa-envelope",
          title: "Messages - الرسائل",
          link: "/User/Messages",
        },
        {
          icon: "fa-check-square",
          title: "Nouveautés - المستجدات",
          link: "/News",
        },
        { icon: "fa-envelope", title: "Contact - راسلنا", link: "/contact" },
        { icon: "fa-comment", title: "A propos - فيما يخصنا", link: "/about" },
        { icon: "fa-home", title: "Accueil - الرئيسية", link: "/" },
      ],
      MenuAdmin: [
        {
          icon: "fa-paper-plane",
          title: "envoyer une fichier - ارسال ملف",
          link: "/Admin/Transfer",
        },
        {
          icon: "fa-envelope",
          title: "Messages - الرسائل",
          link: "/Admin/Messages",
        },
        {
          icon: "fa-envelope",
          title: "Messages - رسائل الغيرالمنخرطين",
          link: "/Admin/MessagesClients",
        },
        {
          icon: "fa-newspaper",
          title: "Management - ادارة المستجدات",
          link: "/Admin/GestionNews",
        },
        {
          icon: "fa-check-square",
          title: "Nouveautés - المستجدات",
          link: "/News",
        },
        { icon: "fa-envelope", title: "Contact - راسلنا", link: "/contact" },
        { icon: "fa-comment", title: "A propos - فيما يخصنا", link: "/about" },
        { icon: "fa-home", title: "Accueil - الرئيسية", link: "/" },
      ],
      MenuMain: [
        {
          icon: "fa-check-square",
          title: "Nouveautés - المستجدات",
          link: "/News",
        },
        { icon: "fa-home", title: "Accueil - الرئيسية", link: "/" },

        { icon: "fa-envelope", title: "Contact - راسلنا", link: "/contact" },
        { icon: "fa-comment", title: "A propos - فيما يخصنا", link: "/about" },
      ],
    };
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },

    MenuSwitch(value) {
      this.drawer = value;
    },
    logout() {
      sessionStorage.clear();
      /* this.isAuth = false; */

      this.$router.push("/");
    },
  },
  watch: {
    $route: {
      handler: function () {
        if (tokenService.isAuth()) {
          this.IsAuth = true;
          this.username = tokenService.getnameuser();
          if (tokenService.isAdmin()) {
            this.Menu = this.MenuAdmin;
            this.isAdmin = true;
          } else if (tokenService.isAdmin() == false) {
            this.Menu = this.MenuUser;
          }
        } else {
          this.Menu = this.MenuMain;
          this.IsAuth = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #f5e5c4 !important;
}
/* .v-main ::v-deep {
  margin: 2% 4% 0 4% !important;
} */
.btntheme {
  background-color: #dfab6a !important;
  color: white !important;
}
.w-full {
  width: 100%;
}

* {
  font-family: "roboto", fallback, "Noto Naskh Arabic";
}
.greenRow {
  background-color: #d4ffc4 !important;
}

.v-data-table__mobile-row {
  border-top: 1px solid;
}

.cellstyle {
  word-break: break-word;
}
</style>
