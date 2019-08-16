<template>
  <v-container>
    <v-layout>
      <nav>
        <v-toolbar flat app>
          <v-toolbar-side-icon @click="drawer = !drawer"/>
          <v-toolbar-title>
            <span>Key Resume</span>
          </v-toolbar-title>
          <v-spacer/>
          <v-btn class="hidden-sm-and-down" @click="getKorean" :disabled="!languageButtonSwitch">한국어</v-btn>
          <v-btn
            class="hidden-sm-and-down"
            @click="getEnglish"
            :disabled="languageButtonSwitch"
          >English</v-btn>
          <div>{{ languageButtonSwitch }}</div>
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      languageButtonSwitch: false,
      drawer: false,
      items: [
        { title: 'AboutMe', icon: 'assignment_ind', router: '/AboutMe' },
        { title: 'Career', icon: 'location_city', router: '/English/Career' },
        { title: 'Education', icon: 'school', router: '/Education' },
        { title: 'Skill', icon: 'edit', router: '/Skill' },
        { title: 'Project', icon: 'work', router: '/Project' },
      ],
    };
  },
  methods: {
    getKorean() {
      console.log('kor');
      console.log(this.languageButtonSwitch);
      // eslint-disable-line no-unused-vars
      this.languageButtonSwitch = false;
      const currentUrl = window.location.pathname;
      console.log(currentUrl);
      this.$router.push('English/Career');
    },
    getEnglish() {
      console.log('eng');
      console.log(this.languageButtonSwitch);
      // eslint-disable-line no-unused-vars
      this.languageButtonSwitch = true;
      const currentUrl = window.location.pathname;

      console.log(currentUrl);
    },
  },
};
</script>
