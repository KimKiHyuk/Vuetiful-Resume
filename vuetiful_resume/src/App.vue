<template>
  <v-app>
    <v-content>
      <Main/>
	  <router-view></router-view>	
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Career from './components/Career'

export default {
  name: 'App',
  components: {
    Main,
	AboutMe,
	Education,
	Career
  },
  data () {
    return {
      //
    }
  }
}
</script>
