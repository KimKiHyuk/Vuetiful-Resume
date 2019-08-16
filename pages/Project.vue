<template>
  <v-container>
    <v-card class="elevation-2 text-xs-right blue-grey lighten-5 pa-3">
      <v-expansion-panel
        expand
        v-model="panel[i]"
        class="elevation-3 mb-4"
        v-for="(item,i) in allInformation"
        :key="i"
      >
        <v-expansion-panel-content>
          <template v-slot:header>
            <div class="title font-weight-black">{{ item.category }}</div>
          </template>
          <v-divider></v-divider>
          <v-card class="pa-2">
            <v-expansion-panel inset expand>
              <v-expansion-panel-content v-for="(item,i) in item.project" :key="i">
                <template v-slot:header>
                  <div class="subheading font-weight-bold">{{ item.title }}</div>
                </template>
                <v-card color="grey lighten-4">
                  <v-card-text>
                    <div class="body-2 ml-3">{{ item.description }}</div>
                  </v-card-text>
                  <v-card color="grey lighten-3">
                    <v-card-text>
                      <div
                        class="body-2 ml-3"
                        v-for="(tech, j) in item.tech"
                        :key="j"
                      >{{ tech.skill }} : {{ tech.usage }}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-flex class="text-xs-right">
                        <v-btn flat color="orange" @click="openGithub(item.github)">Github</v-btn>
                      </v-flex>
                    </v-card-actions>
                  </v-card>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Project',
  methods: mapActions('projectStore', ['fetchInformation']),
  openGithub: (url) => {
    window.open(url, '_blank');
  },
  computed: mapGetters('projectStore', ['allInformation']),
  created() {
    this.$store.dispatch('projectStore/fetchInformation');
    this.panel = [...Array(this.$store.getters['projectStore/allInformation'].length)].map(() => [true]);
  },
  data() {
    return {
      panel: [],
    };
  },
};
</script>
