<template>
  <v-container>
	<v-flex height='58px'>
     <v-toolbar :dark="true">
      	<v-toolbar-title>Key Resume</v-toolbar-title>
      	<v-spacer></v-spacer>
        	<v-toolbar-items min-width='48px'>
          	<v-btn flat to="/AboutMe" round=data.isRound>About Me</v-btn>
          	<v-btn flat to="/Education" round=data.isRound>Education</v-btn>
          	<v-btn flat to="/Career" round=data.isRound>Career</v-btn>
	      	<v-btn flat to="/Skill" round=data.isRound>Skill</v-btn>
	      	<v-btn flat to="/Project" round=data.isRound>Project</v-btn>
        </v-toolbar-items>
      </v-toolbar>
	</v-flex>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
		  isRound: true  
	  }
    }
  }
</script>

<style>
</style>