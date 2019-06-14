<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(skill, i) in skills" :key="i">
        <div class="text-xs-center ma-4">
          <v-avatar :size="avatarSize" color="indigo" :tile="tile">
            <img :src="skill.imageSource" alt="avatar">
          </v-avatar>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      avatarSize: 150,
      skills: [
        {
          name: "C#",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "wpf"
            },
            {
              name: "windows"
            }
          ]
        },
        {
          name: "JAVA",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "android"
            }
          ]
        },
        {
          name: "C/C++",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "windows device driver"
            },
            {
              name: "linux device driver"
            }
          ]
        },
        {
          name: "javascript",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "web front"
            },
            {
              name: "web backend"
            }
          ]
        },
        {
          name: "python",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "django"
            },
            {
              name: "crawler"
            }
          ]
        },
        {
          name: "Scala",
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "django"
            },
            {
              name: "crawler"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>