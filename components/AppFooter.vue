<template>
  <v-footer color="grey darken-4" padless app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="element in links"
        :key="element.link"
        color="white"
        text
        rounded
        class="my-2"
        @click="openUrl(element.link)"
      >
        <v-icon size="24px">{{ element.icon }}</v-icon>
      </v-btn>
      <v-col class="black py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  methods: {
    openUrl: url => {
      window.open(url, '_blank');
    },
  },
  data: () => ({
    links: [
      {
        icon: 'fab fa-github',
        link: 'https://www.github.com/kimkihyuk',
      },
      {
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/in/kihyuk-kim-176a33139',
      },
      {
        icon: 'fab fa-medium',
        link: 'https://medium.com/@keyhyuk.kim',
      },
      {
        icon: 'fab fa-facebook',
        link: 'https://www.facebook.com/profile.php?id=100001299898804',
      },
    ],
  }),
};
</script>
