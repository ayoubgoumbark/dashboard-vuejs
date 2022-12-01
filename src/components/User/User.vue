<template>
  <v-card class="mt-8 dashboard-main" flat>
    <h2>User</h2>
    <router-view></router-view>
  </v-card>
</template>

<script>
import {
  mdiAccountOutline /* , mdiEmailOutline, mdiCellphone, mdiLockOutline */,
} from "@mdi/js";

export default {
  components: {},
  props: {},
  data() {
    return {
      cols: [
        {
          title: "Unresolved",
          count: 21459,
          color: "#ffb8b8",
        },
        {
          title: "Overdue",
          count: 112,
          color: "#dcf5c4",
        },
        {
          title: "Due today",
          count: 322,
          color: "rgb(196 206 243)",
        },
        {
          title: "Open",
          count: 656,
          color: "rgb(251 255 184)",
        },
      ],
      items: [
        {
          text: "Dashboard",
        },
      ],
      selectedItem: 0,

      icons: {
        mdiAccountOutline,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.isactivenav {
  background: #4c6591;
  color: white;
}

label {
  font-size: 14px;
}
h4 {
  font-weight: 100;
}

.dashboard-main {
  background-color: transparent !important;
}

.background-Dashboard {
  background: white;
}

.hovercard {
  transform: translateY(-10px);
}

.cardsP {
  transition: all 0.5s ease-in-out;

  cursor: pointer;
}

@media (min-width: 600px) {
  .col-sm-3 {
    max-width: 23% !important;
  }
}
</style>
