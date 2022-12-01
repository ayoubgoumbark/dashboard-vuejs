<template>
  <div>
    <v-carousel
      hide-delimiters
      cycle
      height="100vh"
      interval="2000"
      hide-delimiter-background
    >
      <v-carousel-item v-for="(n, i) in 3" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-img
              width="100%"
              height="100%"
              :src="`https://alyousr-files.s3.amazonaws.com/HomePictures/cover${n}.jpg`"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="gray"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card class="px-4 pt-4 text-center mb-8 mt-12" flat>
      <h1 class="my-4">Projet En Cours</h1>

      <v-carousel
        hide-delimiters
        cycle
        interval="3000"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(n, i) in enCour"
          :key="i"
          @click="
            selectedimage = n;
            dialog = true;
          "
        >
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <img
                width="100%"
                height="100%"
                :src="n"
                aspect-ratio="1"
                class="grey lighten-2"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <i
        @click="dialog = false"
        class="fas fa-times"
        key="
        "
        style="font-size: 59px; color: black; position: fixed"
      ></i>
      <img :src="selectedimage" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      dialog: false,
      selectedimage: null,
      plans: [],
      enCour: [
        "https://alyousr-files.s3.amazonaws.com/HomePictures/commercial.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/ECO.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/ECOavecGARAGE.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/1.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/2.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/3.jpg",
        "https://alyousr-files.s3.amazonaws.com/HomePictures/4.jpg",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-dialog > * {
  width: 226vw;
}
</style>
