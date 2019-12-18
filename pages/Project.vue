<template>
  <v-container v-if="allInformation !== undefined">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(project, i) in allInformation" :key="i">
        <v-card
          :color="project.fields.color"
          class="text-xs-right ma-2 pa-2"
          outlined
          @click="openGithub(project.fields.github)"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ project.fields.category }}</div>
              <v-list-item-title class="headline mb-1">{{
                project.fields.title
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                project.fields.subtitle
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions></v-card-actions>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '../components/Loading.vue';

export default {
  name: 'Project',
  components: {
    Loading,
  },
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
