<template>
  <v-app>
    <v-content>
      <AppHeader/>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>
