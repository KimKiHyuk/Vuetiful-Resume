<template>
  <v-app>
    <v-content>
      <Header/>
	  <router-view></router-view>	
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import AboutMe from './view/AboutMe'
import Education from './view/Education'
import Career from './view/Career'
import Skill from './view/Skill'
import Project from './view/Project'

export default {
  name: 'App',
  components: {
    Header,
	AboutMe,
	Education,
	Career,
	Skill,
	Project
  },
  data () {
    return {
      //
    }
  }
}
</script>
