<template>
  <v-container>
      <v-card>
        <v-layout>
          <v-flex>
            <div class="text-xs-center">
              <v-avatar class="ma-4" :tile="tile" :size="150" color="grey lighten-4">
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
              </v-avatar>
              <div class="ma-3">
                <h3>{{ info.job }}</h3>
                <h3>{{ info.name }}</h3>
              </div>
            </div>
          </v-flex>
          <v-flex>
            <v-card-title primary-title>
              <div class="headline">{{ info.greet }}</div>
            </v-card-title>
            <v-card-text>{{ info.introduce }}</v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      info: {
        job: "소프트웨어 개발자",
        name: "김기혁",
        greet: "Hello there!",
        nation: "대한민국 서울특별시",
        introduce:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."
      }
    };
  }
};
</script>

<style>
</style>