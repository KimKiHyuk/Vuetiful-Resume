<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(project, i) in allInformation" :key="i">
        <v-card
          :color="project.color"
          class="text-xs-right ma-2 pa-2"
          outlined
          @click="openGithub(project.github)"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ project.category}}</div>
              <v-list-item-title class="headline mb-1">{{project.title}}</v-list-item-title>
              <v-list-item-subtitle>{{project.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions></v-card-actions>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Project',
  methods: {
    openGithub: url => {
      window.open(url, '_blank');
    },
    ...mapActions('projectStore', ['fetchInformation']),
  },
  computed: mapGetters('projectStore', ['allInformation']),
  created() {
    this.$store.dispatch('projectStore/fetchInformation');
  },

  data() {
    return {};
  },
};
</script>
