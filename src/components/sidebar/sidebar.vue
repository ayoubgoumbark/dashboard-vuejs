<template>
  
 
   
    <v-list    dense  class="mt-16"  >

         <v-list-item-group  color="#888888" active-class="active"   v-model="selected"   mandatory>
      <v-list-item   link   v-for="(item, i) in items" 
          :key="i"  >
        <v-list-item-icon  >
          <v-icon size="17">{{item}} </v-icon>
        </v-list-item-icon>
       
      </v-list-item>
      </v-list-item-group>

 
    </v-list>
  
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

.active{
   background-color: #F7F7F7;
   color:#888888;
    
}
</style>
