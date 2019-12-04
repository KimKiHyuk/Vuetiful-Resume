<template>
  <v-container>
    <v-app-bar color="black" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Resume</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list class="pa-0">
        <v-list-item>
          <v-list-item-avatar>
            <img :src="allInformation.profileSrc" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>key Kim</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item-group class="pt-0" dense>
        <v-divider />
        <v-list-item v-for="item in items" :key="item.title" nuxt-link :to="item.router">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: mapActions('aboutMeStore', ['fetchInformation']),
  computed: mapGetters('aboutMeStore', ['allInformation']),
  created() {
    this.$store.dispatch('aboutMeStore/fetchInformation');
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: 'AboutMe', icon: 'assignment_ind', router: '/AboutMe' },
        { title: 'Career', icon: 'location_city', router: '/Career' },
        { title: 'Education', icon: 'school', router: '/Education' },
        { title: 'Skill', icon: 'edit', router: '/Skill' },
        { title: 'Project', icon: 'work', router: '/Project' },
      ],
    };
  },
};
</script>
