<template>
 
<div    class="appbar "  >
  <!--  @click="isDrawerOpen = !isDrawerOpen" -->
  <div 
    class=" d-flex justify-space-between align-center"
    style="width: 100% !important"
  >
    <div class=" d-flex justify-start">
      <v-btn-toggle dist >
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
  
        <v-list-item link>
         
            <v-icon size="18"> fa-search </v-icon>
         
        </v-list-item>
      </v-btn-toggle>
    </div>

    <div class="d-flex justify-end">
      
        <v-btn-toggle dist  style="background: transparent !important">
        <!-- Chat -->
        <v-list-item link>
          <v-list-item-icon class="me-2">
          

            <v-img
              src="../../assets/etats-unis.png"
              max-height="30"
              max-width="30"
            >
            </v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      

      <!--    <theme-switcher></theme-switcher> -->
    <v-list-item  link>
      <v-badge
      
        class="d-flex align-center"
        top
        :color="'error' " 
        overlap
        :content="allNotificationscount"
      >
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-icon size="30">
            {{ icons.mdiBellOutline }}
          </v-icon>
        </v-avatar>
      </v-badge>
    </v-list-item>
  </v-btn-toggle>

   <v-list-item link>
  
      <div
        class="d-inline-flex flex-column justify-center ms-3"
        style="vertical-align: middle"
      >
        <span class="text--primary font-weight-semibold mb-n1"> John Doe </span>
        <small class="text--disabled text-capitalize">Admin</small>
      </div>

      <v-badge
        bottom
        color="success"
        overlap
        offset-x="10"
        offset-y="23"
        class="ms-4"
        dot
      >
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-img :src="require('../../assets/images/avatars/1.png')"></v-img>
        </v-avatar>
      </v-badge>
    </v-list-item>



  </div>
</div> 

</div></template>

<script>
import { mdiMagnify, mdiBellOutline } from "@mdi/js";
export default {
  name: "Home",

  components: {},
  data() {
    return {
      allNotificationscount: 4,
      drawer: true,
      icons: {
        mdiMagnify,
        mdiBellOutline,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.appbar { 
  
  background-color: white !important;
}

</style>
