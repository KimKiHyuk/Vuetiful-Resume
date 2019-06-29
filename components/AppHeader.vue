<template>
  <v-container>
    <nav>
      <v-toolbar flat app>
        <v-toolbar-side-icon @click="drawer = !drawer"/>
        <v-toolbar-title>
          <span>Key Resume</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" app>
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>ki-hyuk KIM</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider/>
          <v-list-tile v-for="item in items" :key="item.title" nuxt-link :to="item.router">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'AboutMe', icon: 'assignment_ind', router: '/Test' },
        { title: 'Career', icon: 'location_city', router: '/Test2' },
        { title: 'Education', icon: 'school', router: '/index' },
        { title: 'Skill', icon: 'edit', router: '/index' },
        { title: 'Project', icon: 'work', router: '/index' },
      ],
    };
  },
};
</script>
