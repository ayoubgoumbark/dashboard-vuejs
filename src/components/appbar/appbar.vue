<template>
  <div class="appbar d-flex justify-space-between align-center">
    <!--  @click="isDrawerOpen = !isDrawerOpen" -->

    <div class="d-flex justify-start">
      <v-img
        class="ml-2"
        v-if="!isMobile && !IsAuth"
        width="59px"
        height="56px"
        :src="require('../../assets/logo.jpg')"
      ></v-img>

      <v-btn-toggle dist v-if="isMobile && !IsAuth">
        <v-list-item link @click.stop="Toggle()">
          <v-list-item-icon>
            <v-icon> fa-bars </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-btn-toggle>
    </div>
    <div class="justify-midle" v-if="isMobile">
      <v-img
        width="59px"
        height="56px"
        :src="require('../../assets/logo.jpg')"
      ></v-img>
    </div>

    <div v-if="!isMobile && !IsAuth" class="d-flex justify-midle">
      <v-list-item
        :key="index"
        v-for="(n, index) in Menu"
        class="align-center"
        link
        @click="navigate(n.link)"
      >
        <v-list-item-icon class="mr-0">
          <v-icon class=""> {{ n.icon }}</v-icon>
          <v-list-item-title class="ml-2">{{ n.title }}</v-list-item-title>
        </v-list-item-icon>
      </v-list-item>
    </div>

    <div class="d-flex justify-end">
      <v-btn-toggle dist>
        <!-- Chat -->

        <v-list-item class="align-center" link @click="login()" v-if="!IsAuth">
          <v-list-item-icon class="mr-0">
            <v-icon class=""> fa-user </v-icon>
            <v-list-item-title class="ml-2">فضاء المنخرط</v-list-item-title>
          </v-list-item-icon>
        </v-list-item>

        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          v-if="IsAuth"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on">
              <div
                class="d-inline-flex flex-column justify-center ms-3"
                style="vertical-align: middle; white-space: nowrap"
              >
                <span class="text--primary font-weight-semibold mb-n1">
                  {{ username }}
                </span>
                <small class="text--disabled text-capitalize">{{
                  isAdmin ? "Admin" : "Utilisateur"
                }}</small>
              </div>

              <v-badge
                bottom
                color="success"
                overlap
                offset-x="10"
                offset-y="12"
                class="ms-4"
                dot
              >
                <v-avatar size="40px">
                  <v-img
                    :src="require('../../assets/images/avatars/1.png')"
                  ></v-img>
                </v-avatar>
              </v-badge>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item link @click="logout()">
              <v-list-item-icon>
                <v-icon class="mr-2"> fa-sign-out-alt </v-icon>
              </v-list-item-icon>
              <v-list-item-title>déconnecter</v-list-item-title>
            </v-list-item></v-list
          >
        </v-menu>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      datauser: {},

      drawer: false,

      Profil: "Main",
    };
  },
  props: {
    Menu: { type: Array },
    username: {
      type: String,
    },
    IsAuth: {
      type: Boolean,
    },

    isAdmin: {
      type: Boolean,
    },

    isMobile: {
      type: Boolean,
    },
  },
  created() {},
  methods: {
    Toggle() {
      this.drawer = !this.drawer;
      this.$emit("menuToggle", this.drawer);
      this.drawer = !this.drawer;
    },
    navigate(link) {
      this.$router.push(link).catch(() => {});
    },

    logout() {
      this.$emit("logout");
    },
    login() {
      this.$router.push("/login").catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.appbar {
  background-color: white !important;

  overflow: hidden;
}
</style>
