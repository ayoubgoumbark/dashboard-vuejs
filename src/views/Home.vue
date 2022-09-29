<template>
  <v-app>
    <v-app-bar class=" appbar mt-2  mr-8"  app   absolute >
      <app-bar  ></app-bar>
     
    </v-app-bar>
    <v-main  class="pl-12">
      <!-- Sizes your content based upon application components -->
      <div
        class="app-content-container boxed-container pa-6"
        id="maincontainer"
      >
       <dashboard></dashboard>
       
      </div>
    </v-main>
    <!--  <v-navigation-drawer app>-->
    <v-navigation-drawer
      style="z-index: 3 "
     mini-variant
     mini-variant-width="60"
      
      absolute
      
      class="sidebar "
      
    >
      <sidebar></sidebar>
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
  .appbar{
    background-color: white !important
  }
.v-app-bar ::v-deep {
 
  .v-toolbar__content {
    padding: 0;
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

header{

left:7% !important;

}

</style>
