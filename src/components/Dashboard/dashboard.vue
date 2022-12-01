<template>
  <v-card class="mt-8 dashboard-main" flat>
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <v-row justify-sm="space-between" no-gutters>
          <v-col v-for="n in cols" :key="n" cols="6" sm="3">
            <v-hover v-slot="{ hover }" open-delay="0">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover hovercard': hover }"
                outlined
                class="pa-2 cardsP"
                :style="{ 'background-color': n.color }"
              >
                <v-card-title> {{ n.count }}</v-card-title>
                <v-card-text> {{ n.title }}</v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-row class="mt-4 px-4 py-4 background-Dashboard" no-gutters>
          <v-col class="" cols="12" sm="8">
            <LineChart />
          </v-col>
          <v-col class="d-inline-flex" cols="12" sm="4">
            <v-divider vertical></v-divider>
            <Circlechart style="width: 100%" />
          </v-col>
        </v-row>

        <v-row class="mt-4 background-Dashboard" no-gutters>
          <v-col class="" cols="12" sm="4">
            <v-card flat class="px-4 py-2" height="300">
              <v-card-title>Unresolved Tickets</v-card-title>
            </v-card>
          </v-col>
          <v-col class="" cols="12" sm="4">
            <v-card flat class="px-4 py-2" height="300">
              <v-card-title>To-Do (1)</v-card-title>
            </v-card>
          </v-col>
          <v-col class="" cols="12" sm="4">
            <v-card height="300" flat class="px-4 py-2">
              <v-card-title>Forums</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {
  mdiAccountOutline /* , mdiEmailOutline, mdiCellphone, mdiLockOutline */,
} from "@mdi/js";
import LineChart from "../charts/line.vue";
import Circlechart from "../charts/circlechart.vue";
export default {
  components: { LineChart, Circlechart },
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
