<template>
  <v-container v-if="allInformation !== undefined">
    <v-timeline dense>
      <v-timeline-item
        v-for="(edu, i) in allInformation"
        :key="i"
        color="blue lighten-2"
        large
      >
        <v-card class="elevation-5">
          <v-card-title class="headline">
            {{ edu.fields.insititute }}
            <span class="subheading ml-3"
              >{{ edu.fields.period_start.slice(0, 7) }} ~
              {{ edu.fields.period_end.slice(0, 7) }}</span
            >
          </v-card-title>

          <v-card-text>
            <div>
              <p class="body-2">{{ edu.fields.type }}</p>
              <p
                v-html="htmlParseHelper(edu.fields.description)"
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
import newLine2Br from '../utility/htmlParser';
import Loading from '../components/Loading.vue';

export default {
  name: 'Education',
  methods: {
    htmlParseHelper: json => newLine2Br(json),
  },
  components: {
    Loading,
  },
  ...mapActions('educationStore', ['fetchInformation']),
  computed: mapGetters('educationStore', ['allInformation']),
  created() {
    this.$store.dispatch('educationStore/fetchInformation');
  },
  data() {
    return {};
  },
};
</script>
<style></style>
