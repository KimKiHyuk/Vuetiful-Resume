<template>
  <v-timeline dense>
    <v-timeline-item v-for="(career, i) in allInformation" :key="i" color="indigo accent-4" large>
      <v-card class="elevation-5">
        <v-card-title class="headline">
          {{ career.company }}
          <span class="subheading ml-3">{{ career.period }}</span>
        </v-card-title>

        <v-card-text>
          <div>
            <p class="body-2">{{ career.position }}</p>
            <p class="body-1">{{ career.experience }}</p>
            <h1>{{ language }}</h1>
          </div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Career',
  props: {
    language: String,
  },
  methods: mapActions('careerStore', ['fetchInformation']),
  computed: mapGetters('careerStore', ['allInformation']),
  created() {
    this.$store.dispatch('careerStore/fetchInformation');
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
