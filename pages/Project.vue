<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(data, i) in meta" :key="i">
        <v-card :color="data.color" class="text-xs-right ma-2 pa-2" outlined max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ data.name}}</div>
              <v-list-item-title class="headline mb-1">{{data.title}}</v-list-item-title>
              <v-list-item-subtitle>{{data.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions>
              <div class="text-xs-right">
                <v-btn @click="openGithub(data.link)">Listen Now</v-btn>
              </div>
            </v-card-actions>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Project',
  methods: {
    openGithub: url => {
      window.open(url, '_blank');
    },
  },
  data() {
    return {
      panel: [],
      meta: [
        {
          title: 'Vue.js App',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'purple',
          name: 'Web',
          link: 'www.github.com',
        },
        {
          title: 'Backend using kakk',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'red',
          name: 'App',
          link: 'www.github.com',
        },
        {
          title: 'frontend tech',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'red',
          name: '3',
          link: 'www.github.com',
        },
        {
          title: 'deep learnming',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'blue',
          name: '4',
          link: 'www.github.com',
        },
        {
          title: 'data pipeline',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'pink',
          name: '5',
          link: 'www.github.com',
        },
        {
          title: 'dart app',
          subtitle:
            'Vue.js, 자바스크립트를 활용해 만든 프론트엔드 웹 어플리케이션',
          color: 'purple',
          name: '6',
          link: 'www.github.com',
        },
      ],
    };
  },
};
</script>
