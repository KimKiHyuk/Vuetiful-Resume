<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item v-for="(edu, i) in allInformation" :key="i" color="blue lighten-2" large>
        <v-card class="elevation-5">
          <v-card-title class="headline">
            {{ edu.institute }}
            <span class="subheading ml-3">{{ edu.period }}</span>
          </v-card-title>

          <v-card-text>
            <div>
              <p class="body-2">{{ edu.type }}</p>
              <p class="body-1">{{ edu.description }}</p>
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
