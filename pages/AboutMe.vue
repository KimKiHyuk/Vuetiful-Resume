<template>
  <v-container v-if="allInformation !== undefined">
    <v-card class="text-center">
      <v-layout row wrap>
        <v-flex>
          <div>
            <v-avatar class="ma-4" :size="150" color="grey lighten-4">
              <img :src="allInformation[0].fields.profile_image" alt="avatar" />
            </v-avatar>
            <div class="ma-3">
              <h3>{{ allInformation[0].fields.job }}</h3>
              <h3>{{ allInformation[0].fields.name }}</h3>
            </div>
          </div>
        </v-flex>
        <v-flex>
          <v-card-title class="justify-center">
            <div class="headline">{{ allInformation[0].fields.greet }}</div>
          </v-card-title>
          <v-card-text
            v-html="htmlParseHelper(allInformation[0].fields.introduce)"
          ></v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '../components/Loading.vue';
import newLine2Br from '../utility/htmlParser';

export default {
  name: 'AboutMe',
  components: {
    Loading,
  },
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
