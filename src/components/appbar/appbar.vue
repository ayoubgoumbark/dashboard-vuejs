<template>
  <!--  @click="isDrawerOpen = !isDrawerOpen" -->
  <div  class="  pt-4 pr-4 pb-4  d-flex justify-space-between align-center " style="width:100% !important" >
   
<div  class="ml-16 d-flex justify-start ">


  <v-btn-toggle background-color="transparent" >

 <v-list-item   link>
        <v-list-item-icon >
          <v-icon size="18"  >
             fa-comment
          </v-icon>
        </v-list-item-icon>
      
      </v-list-item>
 <v-list-item  link>
        <v-list-item-icon >
          <v-icon size="18"  >
             fa-envelope
          </v-icon>
        </v-list-item-icon>
      
      </v-list-item>
 <v-list-item  link>
        <v-list-item-icon >
          <v-icon size="18"  >
             fa-calendar
          </v-icon>
        </v-list-item-icon>
      
      </v-list-item>
 <v-list-item link >
        <v-list-item-icon >
          <v-icon size="18" color="yellow" >
             fa-star
          </v-icon>
        </v-list-item-icon>
      
      </v-list-item>
         




 <v-divider
      class="mx-4"
      vertical
    ></v-divider>

 <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="18" >
            fa-search
          </v-icon>
        </v-list-item-icon>
      
      </v-list-item>
    </v-btn-toggle>
</div>

<div  class="d-flex justify-end">
  <v-list dense  style="background:transparent !important" >
      <!-- Chat -->
      <v-list-item
       link
       
        
        
      >
      
        <v-list-item-icon class="me-2">
          <!--       @click.prevent="isOpen ? close() : openAndFocus()" -->
          <!-- v-if="showLauncher" -->
         
            <v-img src="../../assets/etats-unis.png" max-height="30"
  max-width="30">
             
            </v-img>
          
        </v-list-item-icon>
       
        <v-list-item-content>
          <v-list-item-title>English</v-list-item-title>
        </v-list-item-content>
      
      </v-list-item>
    </v-list>
   

<!--    <theme-switcher></theme-switcher> -->
<v-badge
class="d-flex align-center"
        top
        :color="allNotificationscount != 0 ? 'error' : null"
        overlap
        :content="allNotificationscount"
      >
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-icon size="30">
            {{ icons.mdiBellOutline }}
          </v-icon>
        </v-avatar>
      </v-badge>

 
 <div
   class="d-inline-flex flex-column justify-center ms-3"
   style="vertical-align:middle"
 >
   <span class="text--primary font-weight-semibold mb-n1">
     John Doe
   </span>
   <small class="text--disabled text-capitalize">Admin</small>
 </div>

<v-badge
  bottom
  color="success"
  overlap
  offset-x="12"
  offset-y="12"
  class="ms-4"
  dot
>

  <v-avatar
    size="40px"
    v-bind="attrs"
    v-on="on">
   <v-img :src="require('../../assets/images/avatars/1.png')"></v-img> 
  </v-avatar>
</v-badge>
</div>




</div>
</template>

<script>




import { mdiMagnify, mdiBellOutline } from "@mdi/js";
export default {
  name: "Home",

  components: {
   
    
  
  },
  data() {
    return {
      allNotificationscount:4,
      isDrawerOpen:false,
      icons: {
        mdiMagnify,
        mdiBellOutline,
      },
    };
  },
 
};
</script>

<style lang="scss" scoped>

.v-list-item{
  padding:0 !important;
}
</style>
