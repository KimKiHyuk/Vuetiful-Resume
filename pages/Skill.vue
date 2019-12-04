<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(skill, i) in allInformation" :key="i">
        <div class="text-xs-center ma-4">
          <v-avatar :size="allInformation.avatarSize" color="indigo">
            <img :src="skill.imageSource" alt="avatar" />
          </v-avatar>
          <div>
            <div class="title mt-1 mb-1">{{ skill.name }}</div>
            <v-rating small :readonly="true" v-model="skill.proficiency"></v-rating>
          </div>
          <div>
            <span
              class="blue lighten-4 ma-1 font-weight-bold"
              v-for="(element, j) in skill.hashTags"
              :key="j"
            >#{{ element.tag }}</span>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Skill',
  methods: mapActions('skillStore', ['fetchInformation']),
  computed: mapGetters('skillStore', ['allInformation']),
  created() {
    this.$store.dispatch('skillStore/fetchInformation');
  },
};
</script>

<style>
</style>
