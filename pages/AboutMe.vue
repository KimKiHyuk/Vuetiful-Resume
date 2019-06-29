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
              <h3>{{ allInformation.job }}</h3>
              <h3>{{ allInformation.name }}</h3>
            </div>
          </div>
        </v-flex>
        <v-flex>
          <v-card-title primary-title>
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
