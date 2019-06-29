<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(career, i) in allInformation" :key="i" :color="career.color" small>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${career.color}--text`"
          >{{ career.year }}년 {{ career.month }}월</span>
        </template>
        <div class="py-3">
          <h2 :class="`headline font-weight-bold mb-3 ${career.color}--text`">{{ career.company }}</h2>
          <div>{{ career.experience }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Career',
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
