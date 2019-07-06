<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(edu, i) in allInformation" :key="i" color="red lighten-2" large>
        <template v-slot:opposite></template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ edu.institute }}</v-card-title>
          <v-card-text>
            <div>
              <p>{{ edu.type }}</p>
              <p>{{ edu.description }}</p>
              <p>{{ edu.period }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Education',
  methods: mapActions('educationStore', ['fetchInformation']),
  computed: mapGetters('educationStore', ['allInformation']),
  created() {
    this.$store.dispatch('educationStore/fetchInformation');
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>
