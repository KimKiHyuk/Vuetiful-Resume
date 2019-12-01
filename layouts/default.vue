<template>
  <v-app>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
    <v-content>
      <header>
        <AppHeader />
      </header>
      <nuxt />
      <footer>
        <AppFooter />
      </footer>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
