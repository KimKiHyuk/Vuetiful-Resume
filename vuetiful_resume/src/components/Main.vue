<template>
  <v-container>
	<v-toolbar :dark="true">
    <v-toolbar-title>Key Resume</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sx-and-down">
      <v-btn flat to="/AboutMe" round=data.isRound>About Me</v-btn>
      <v-btn flat to="/Education" round=data.isRound>Career</v-btn>
      <v-btn flat round=data.isRound>Education</v-btn>
	  <v-btn flat round=data.isRound>Skill</v-btn>
	  <v-btn flat round=data.isRound>interests</v-btn>
    </v-toolbar-items>
    </v-toolbar>
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