<template>
  <div class="sidebar_content">
    <v-list dense>
      <v-list-item-group
        class="sidebar-item"
        active-class="sidebar-item-active"
        v-model="selected"
      >
        <v-list-item link v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon size="17" class="sidebar-item-icon"
              >{{ item.icon }}
            </v-icon></v-list-item-icon
          >
          <v-list-item-title class="text-h6">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",

      items: [
        { icon: "fa-home", title: "Home" },
        { icon: "fa-envelope", title: "envelope" },
        { icon: "fa-comment", title: "comment" },
        { icon: "fa-check-square", title: "Todo" },
        { icon: "fa-calendar", title: "calendar" },

        { icon: " fa-file", title: "files" },
        { icon: "fa-save", title: "saves" },

        { icon: "fa-cog", title: "Settings" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar_content {
  display: flex !important;
  align-items: center !important;

  height: 100vh;
}

.sidebar-item .v-icon {
  color: #888888 !important;
}
.sidebar-item-active .v-icon {
  color: black !important;
}

.sidebar {
  background-color: white !important;
}
</style>
