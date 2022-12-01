<template>
  <v-card class="pb-4 px-4 auth-wrapper">
    <v-row>
      <v-col cols="12" sm="6">
        <!-- logo -->
        <div class="d-flex justify-center align-center my-3">
          <h4 class="text-2xl font-weight-semibold d-flex">
            نبذة عن ودادية اليسر للسكن
          </h4>
        </div>

        <p class="ar">
          إن توفير السكن الملائم يعد أحد مقومات الحياة الأساسية التي تساهم في
          الإستقرار النفسي و العائلي، و لهذه الغاية النبيلة تم تأسيس ودادية
          اليسر للسكن سنة 2013 و التي تهدف أساسا إلى خلق جو من الثقة و التعاون و
          التضامن بين منخرطيها من أجل امتلاك سكن لائق في موقع ممتاز و بأقل تكلفة
          وبشروط تفضيلية تطمح الجمعية إلى توسيع دائرة المستفيدين من مشروعها عن
          طريق إفساح المجال أمام جميع المهتمين من أجل الالتحاق بلائحة منخرطيها
          في حدود المناصب الشاغرة، شريطة الالتزام بمقتضيات قانونها الأساسي
          ونظامها الداخلي، وبعد دراسة طلب الانخراط والموافقة عليه من قبل المكتب
          المسير
        </p>
      </v-col>
      <v-divider></v-divider>

      <v-col cols="12" sm="6">
        <div class="d-flex justify-center align-center my-3">
          <h4 class="text-2xl font-weight-semibold d-flex">
            AMICALE AL YOUSR POUR L’HABITAT
          </h4>
        </div>

        <p>
          Promouvoir l’habitat à caractère associatif, telle est la vocation de
          l’Amicale AL YOUSR, association créer en 2013 a pour but la
          réalisation des projets immobiliers novateurs qui répondent aux
          besoins et attentes des adhérents de l’amicale et l’acquisition d’un
          bien immobilier en toute sérénité avec des prix très intéressantes.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline

export default {
  name: "About",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: inherit !important;
  background-color: white !important;
}

h2 {
  white-space: nowrap;
}
.ar {
  text-align: right;
}
</style>
