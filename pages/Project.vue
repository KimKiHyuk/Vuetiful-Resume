<template>
  <v-container>
    <v-expansion-panel expand class="mb-4" v-for="(item,i) in info" :key="i">
      <v-expansion-panel-content>
        <template v-slot:header>
          <div class="title font-weight-black">{{ item.category }}</div>
        </template>
        <v-divider></v-divider>
        <v-card class="pa-2">
          <v-expansion-panel inset expand>
            <v-expansion-panel-content v-for="(item,i) in item.project" :key="i">
              <template v-slot:header>
                <div class="subheading font-weight-bold">{{ item.title }}</div>
              </template>
              <v-card color="grey lighten-4">
                <v-card-text>
                  <div class="body-2 ml-3">{{ item.description }}</div>
                </v-card-text>
                <v-card color="grey lighten-3">
                  <v-card-text>
                    <div
                      class="body-2 ml-3"
                      v-for="(tech, j) in item.tech"
                      :key="j"
                    >{{ tech.skill }} : {{ tech.usage }}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-flex class="text-xs-right">
                      <v-btn flat color="orange" @click="openGithub(item.github)">Github</v-btn>
                    </v-flex>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          category: 'Client', // enum
          project: [
            {
              title: 'WINDOWS Protection program',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              tech: [
                {
                  skill: 'C#',
                  usage: 'building for wpf',
                },
                {
                  skill: 'python',
                  usage: 'erase program',
                },
              ],
              github: 'https://www.naver.com',
            },
            {
              title: 'Opencv MFC',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              tech: [
                {
                  skill: 'C#',
                  usage: 'building for wpf',
                },
                {
                  skill: 'python',
                  usage: 'erase program',
                },
              ],
              github: 'https://www.naver.com',
            },
          ],
        },
        {
          category: 'Web', // enum
          project: [
            {
              title: 'Resuem by vue',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              tech: [
                {
                  skill: 'javascript',
                  usage: 'frontend',
                },
                {
                  skill: 'babel',
                  usage: 'transpiler',
                },
              ],
              github: 'https://www.naver.com',
            },
          ],
        },
      ],
    };
  },
  methods: {
    openGithub: (url) => {
      window.open(url, '_blank');
    },
  },
};
</script>
