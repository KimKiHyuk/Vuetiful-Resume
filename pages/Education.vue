<template>
  <v-container>
    <v-timeline dense>
      <v-timeline-item v-for="(edu, i) in allInformation" :key="i" color="blue lighten-2" large>
        <v-card class="elevation-5">
          <v-card-title class="headline">
            {{ edu.insititute }}
            <span class="subheading ml-3">{{ edu.period }}</span>
          </v-card-title>

          <v-card-text>
            <div>
              <p class="body-2">{{ edu.type }}</p>
              <p v-html="htmlParseHelper(edu.description)" class="body-1"></p>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import newLine2Br from '../utility/htmlParser';

export default {
  name: 'Education',
  methods: {
    htmlParseHelper: json => newLine2Br(json),
  },
  ...mapActions('educationStore', ['fetchInformation']),
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
