<template>
  <v-app>
    <!--  <v-navigation-drawer app>-->
    <v-navigation-drawer
      expand-on-hover
      app
      mini-variant
      class="sidebar"
      fixed
      v-model="drawer"
    >
      <sidebar />
    </v-navigation-drawer>

    <v-main>
      <!-- Sizes your content based upon application components -->
      <app-bar></app-bar>
      <dashboard></dashboard>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "../components/appbar/appbar.vue";

import dashboard from "../components/Dashboard/dashboard.vue";
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "Home",

  components: {
    "app-bar": appbar,
    dashboard: dashboard,
    sidebar,
  },
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  background: #f5e5c4 !important;
}
.v-main ::v-deep {
  margin: 2% 4% 0 4% !important;
}
</style>
