<template>
  <v-container>
    <v-card class="text-center">
      <v-layout row wrap>
        <v-flex>
          <div>
            <v-avatar class="ma-4" :size="150" color="grey lighten-4">
              <img :src="allInformation.profileSrc" alt="avatar" />
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
          <v-card-text v-html="htmlParseHelper(allInformation.introduce)"></v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import newLine2Br from '../utility/htmlParser';

export default {
  name: 'AboutMe',
  methods: {
    htmlParseHelper: json => newLine2Br(json),
  },
  ...mapActions('aboutMeStore', ['fetchInformation']),
  computed: mapGetters('aboutMeStore', ['allInformation']),
};
</script>

<style>
.pre-formatted {
  white-space: pre;
}
</style>
