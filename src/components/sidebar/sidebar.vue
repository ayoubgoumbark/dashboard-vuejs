<template>
  <div class="sidebar_content">
    <v-list nav>
      <v-list-item-group
        class="sidebar-item"
        active-class="sidebar-item-active"
        v-model="selected"
      >
        <v-list-item
          class="text-center"
          link
          v-for="(item, i) in Menu"
          :key="i"
          :to="item.link"
        >
          <v-list-item-title class="text-h6">
            <v-list-item-icon>
              <v-icon size="17" class="sidebar-item-icon"
                >{{ item.icon }}
              </v-icon></v-list-item-icon
            >
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
    };
  },
  props: {
    Menu: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar_content {
  display: flex !important;
  align-items: center !important;
}

.sidebar-item .v-icon {
  color: #888888 !important;
}
.sidebar-item-active .v-icon {
  color: black !important;
}

.sidebar-item-active {
  background-color: #ffdd98;
}

.sidebar {
  background-color: white !important;
}

.v-list {
  width: 100%;
}
</style>
