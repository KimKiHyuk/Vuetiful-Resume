<template>
  <v-container>
    <v-card  class="text-xs-center">
      <v-layout row wrap>
        <v-flex>
          <div>
            <v-avatar class="ma-4" :size="150" color="grey lighten-4">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
            <div class="ma-3">
              <h3>{{ allInformation.job }}</h3>
              <h3>{{ allInformation.name }}</h3>
            </div>
          </div>
        </v-flex>
        <v-flex>
          <v-card-title class="justify-center">
            <div class="headline">{{ allInformation.greet }}</div>
          </v-card-title>
          <v-card-text>{{ allInformation.introduce }}</v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AboutMe',
  methods: mapActions('aboutMeStore', ['fetchInformation']),
  computed: mapGetters('aboutMeStore', ['allInformation']),
  created() {
    this.$store.dispatch('aboutMeStore/fetchInformation');
  },
};
</script>
