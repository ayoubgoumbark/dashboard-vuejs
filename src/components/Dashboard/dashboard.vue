<template>
  
    <v-card style="background:transparent;"  class="mx-auto" flat >
<div style="background:transparent;" class="ml-6 d-inline-flex">
      <v-icon >fa-home</v-icon>
      <v-icon class="ml-4">mdi-chevron-right</v-icon>
      <v-breadcrumbs :items="items">
        
      <template v-slot:divider>
        
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>










  <v-container class="">
    <v-row no-gutters>
      <v-col
      
        cols="2"
        sm="2"
      >
      <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
  
     

      <v-list
        dense
        nav
      >
      <v-list-item-group
      active-class="isactivenav"
        v-model="selectedItem">
        <v-list-item
     
          v-for="item in navigation"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content   >
            <v-list-item-title class="d-flex align-center justify-space-between "><span>{{ item.title }}  </span>  <v-badge v-if="item.count!=0" class="mt-0 justify-end"  :content="item.count"
  inline></v-badge></v-list-item-title>
         
          </v-list-item-content>
        </v-list-item>
        

          <v-list-item>

            <v-list-item-content>
              <label for="">TAGS</label>
      <v-radio-group>
      <v-radio
       
       
        label="Non"
        
      ></v-radio>
     
     <v-radio
       
       
       label="Important"
       
     ></v-radio>
    </v-radio-group>
            </v-list-item-content>
          </v-list-item>




      </v-list-item-group>
     
      </v-list>

      
 
  </v-card>
      </v-col>





      <v-col
      class="pl-4"
      cols="10"
      sm="10"
    >



    <v-row no-gutters>
      <v-col
        v-for="n in cols"
        :key="n"
        cols="2"
        sm="2"
      >
        <v-card  elevation="3"
         outlined
          class="pa-2"
          
          tile
        >
        <v-card-title>  {{n.count}}</v-card-title>
        <v-card-text>  {{n.title}}</v-card-text>
       
        </v-card>
      </v-col>

    </v-row>





<v-row class="mt-4" style="background-color:white;" no-gutters>

<v-col  class="mt-6 pl-2 pr-2" cols="8" sm="8">


<LineChart/>

</v-col>
<v-col class=" d-inline-flex pt-12" cols="4" sm="4">

<v-divider vertical></v-divider>

<div class="p-4">
  <label for="">resolved</label>
  <h4 class="mt-2"><strong>0</strong></h4>
  <label for="">Average first response time</label>
  <h4 class="mt-2"><strong>0 m</strong></h4>
  <label for="">resolution within SLA</label>
  <h4 class="mt-2"><strong>0 %</strong></h4>
</div>

<v-divider vertical></v-divider>
<div class="p-4">
<label for="">reseived</label>
  <h4 class="mt-2"><strong>8</strong></h4>
  <label for="">Average-response time</label>
  <h4 class="mt-2"><strong>0 m</strong></h4>
</div>
</v-col>



</v-row>





<div class="d-flex justify-space-between pt-4" no-gutters>

<div style="width:32%;"  >
  <v-card flat class="pb-3 " height="300">
    <v-card-title>Unresolved Tickets</v-card-title>
   
    <v-card-text> <small>accros helpdesk</small></v-card-text>
   <div class="mx-4 d-flex justify-space-between"><label for="">group</label> <label for="">Open</label></div> 
    <v-divider></v-divider>



    <div class="mx-4 d-flex justify-space-between"><label for="">Unassigned</label> <label for="">8</label></div> 
    <v-divider></v-divider>

    <div class="mx-4 d-flex justify-space-between"><label for="">Customer support </label> <label for="">2</label></div> 
    <v-divider></v-divider>

    <div class="mx-4 d-flex justify-space-between"><label for="">Billing </label> <label for="">1</label></div> 
   
     







  </v-card>
</div>
<div style="width:32%;"  >


  <v-card flat class="pb-3 px-4 " height="300">
    <v-card-title>To-Do (1)</v-card-title>
   
    <v-card-text> <small>accros helpdesk</small></v-card-text>
    <v-text-field
         
    label="Add a TO-DO"
    prepend-inner-icon="mdi-plus-circle"
        >
      
        </v-text-field>
    



    <div class="mx-4 d-flex justify-space-between">
    <div><input type="checkbox"> <span>List incoming Payement</span></div> 
      
       <label for="">8</label></div> 
    <v-divider></v-divider>

   
     







  </v-card>





</div>
<div style="width:32%;" >
  <v-card height="300" flat class="pb-3">
    <v-card-title>Forums</v-card-title>
   
    <v-card-text> <small>accros helpdesk</small></v-card-text>
   







  </v-card>
</div>
</div>



  
    </v-col>

    </v-row>



   
  </v-container>










    </v-card>
 
</template>

<script>

import {
  mdiAccountOutline /* , mdiEmailOutline, mdiCellphone, mdiLockOutline */,
} from "@mdi/js";
import LineChart from "../line/line.vue";
export default {
  components: { LineChart },
  props: {},
  data() {
    return {
      cols:[{
        title:'Unresolved',count:21459
      },
      {
        title:'Overdue',count:112
      },
      {
        title:'Due today',count:322
      }
      ,
      {
        title:'Open',count:656
      }
      ,
      {
        title:'On hold',count:786
      }
      ,
      {
        title:'Unassigned',count:766
      }
    
    ],
      items: [
       
        {
          text: 'Ticket',
         
        },
      
        {
          text: 'Dashboard',
         
        },
      ],
      selectedItem:0,
      navigation: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard',count:0},
          { title: 'Open', icon: 'mdi-open-in-app',count:10 },
          { title: 'Mine', icon: 'mdi-account',count:5 },
          { title: 'Assigned', icon: 'mdi-account-plus',count:15 },
          { title: 'UnAssigned', icon: 'mdi-account-remove',count:28 },
          { title: 'Compete', icon: 'mdi-thumb-up-outline',count:4 },
          { title: 'Deleted', icon: 'mdi-delete',count:3 },
          { title: 'Spam', icon: 'mdi-alert-circle-outline',count:33 },
        ],
      icons: {
        mdiAccountOutline,
        
      },
    };
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>

.isactivenav{
  background: #4c6591;
  color:white;
}

label{

  font-size: 14px;
}
h4{

  font-weight: 100;
}

</style>
