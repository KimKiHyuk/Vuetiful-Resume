<template>
  <v-container v-if="allInformation !== undefined">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(skill, i) in allInformation" :key="i">
        <div class="text-center ma-5">
          <v-avatar :size="120" color="transparent">
            <img :src="skill.fields.image" alt="avatar" />
          </v-avatar>
          <div>
            <div class="title mt-1 mb-1">{{ skill.fields.name }}</div>
            <v-rating
              small
              :readonly="true"
              v-model="skill.fields.proficiency"
            ></v-rating>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '../components/Loading.vue';

export default {
  name: 'Skill',
  components: {
    Loading,
  },
  methods: mapActions('skillStore', ['fetchInformation']),
  computed: mapGetters('skillStore', ['allInformation']),
  created() {
    this.$store.dispatch('skillStore/fetchInformation');
  },
};
</script>

<style></style>
