<template>
  <v-container v-if="allInformation !== undefined">
    <v-timeline dense>
      <v-timeline-item
        v-for="(career, i) in allInformation"
        :key="i"
        color="indigo accent-4"
        large
      >
        <v-card class="elevation-5">
          <v-card-title class="headline">
            {{ career.fields.company }}
            <span class="subheading ml-3"
              >{{ career.fields.period_start.slice(0, 7) }} ~
              {{ career.fields.period_end.slice(0, 7) }}</span
            >
          </v-card-title>

          <v-card-text>
            <div>
              <p class="body-2">{{ career.fields.position }}</p>
              <p
                v-html="htmlParseHelper(career.fields.experience)"
                class="body-1"
              ></p>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
  <Loading v-else />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loading from '../components/Loading.vue';
import newLine2Br from '../utility/htmlParser';

export default {
  name: 'Career',
  components: {
    Loading,
  },
  methods: { htmlParseHelper: json => newLine2Br(json) },
  ...mapActions('careerStore', ['fetchInformation']),
  computed: mapGetters('careerStore', ['allInformation']),
  created() {
    this.$store.dispatch('careerStore/fetchInformation');
  },
  data() {
    return {};
  },
};
</script>

<style></style>
