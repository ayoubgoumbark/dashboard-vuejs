<template>
  <v-app>
   
      <app-bar  ></app-bar>
     
  
    <v-main  class="pl-12">
      <!-- Sizes your content based upon application components -->
      
       <dashboard></dashboard>
       
     
    </v-main>
    <!--  <v-navigation-drawer app>-->
    <v-navigation-drawer
      app
     mini-variant
      class="sidebar"
      fixed

    >
      <sidebar/>
    </v-navigation-drawer>

   

    
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
   "dashboard":dashboard,
    sidebar,
  },
  data() {
    return {
      
    };
  },
  
 
};
</script>

<style lang="scss" scoped>

  .v-main ::v-deep{
    background-color: #F5F5F5;
  }
 



 
</style>
