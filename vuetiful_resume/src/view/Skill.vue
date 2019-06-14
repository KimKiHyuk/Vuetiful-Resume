<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(skill, i) in skills" :key="i">
        <div class="text-xs-center ma-4">
          <v-avatar :size="avatarSize" color="indigo" :tile="tile">
            <img :src="skill.imageSource" alt="avatar">
          </v-avatar>
          <div>
            <div class="title mt-1 mb-1">{{ skill.name }}</div>
            <v-rating small :readonly="true" v-model="skill.proficiency"></v-rating>
          </div>
					<div>
						<span class="blue lighten-4 ma-1 font-weight-bold" v-for="(element, j) in skill.hashtag" :key="j">
							#{{ element.name }}
						</span>
					</div>
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
          proficiency: 5,
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
          proficiency: 5,
          imageSource: "https://vuetifyjs.com/apple-touch-icon-180x180.png",
          hashtag: [
            {
              name: "android"
            }
          ]
        },
        {
          name: "C/C++",
          proficiency: 5,
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
          proficiency: 3,
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
          proficiency: 5,
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
          proficiency: 4,
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