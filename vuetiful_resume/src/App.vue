<template>
  <v-app>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">

    <v-content>
      <Header/>
      <router-view/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./view/AboutMe";
import Education from "./view/Education";
import Career from "./view/Career";
import Skill from "./view/Skill";
import Project from "./view/Project";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AboutMe,
    Education,
    Career,
    Skill,
    Project
  },
  data() {
    return {
      //
    };
  }
};
</script>
