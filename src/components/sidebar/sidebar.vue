<template >
  
 
   <div class="sidebar_content">
    <v-list    dense   >

         <v-list-item-group class="sidebar-item"  active-class="sidebar-item-active"   v-model="selected"   >
      <v-list-item      v-for="(item, i) in items" 
          :key="i"  >
       
          <v-icon size="17" class="sidebar-item-icon" >{{item}} </v-icon>
       
       
       
      </v-list-item>
      </v-list-item-group>

 
    </v-list>
  </div>
</template>

<script>



export default {
 
  data() {
    return {
        selected:'',
     
       items: [
       "fa-home","fa-envelope","fa-comment","fa-check-square","fa-calendar","fa-th-large"," fa-file",
       "fa-save","fa-window-maximize","fa-tablet","fa-cog"
      ],
    };
  },

};
</script>

<style lang="scss" scoped>



.sidebar_content{ display: flex !important; 
  align-items: center !important;

  height: 100vh;
}

.sidebar-item .v-icon{

color:#888888 !important;



}
.sidebar-item-active .v-icon{
 
 color:black !important;
  
}

.sidebar{
background-color: white !important;
}
</style>
