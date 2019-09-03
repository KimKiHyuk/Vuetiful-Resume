<template>
  <v-container>
    <v-layout row wrap>
      <v-form ref="form" @submit.prevent="submit">
        <v-select
          v-model="form.whichPartOfResume"
          :items="partOfResume"
          :rules="rules.resumePart"
          color="Green"
          label="what part of resume?"
          required
        ></v-select>
        <v-textarea v-model="form.json" color="teal">
          <template v-slot:label>
            <div>
              your new resume is ready
              <small>(Write as json)</small>
            </div>
          </template>
        </v-textarea>
        <v-btn
          class="green lighten-5"
          :disabled="!formIsValid"
          text
          type="submit"
          @click="submit"
        >submit</v-btn>
        <v-btn class="red lighten-5" text @click="exit">exit</v-btn>
      </v-form>
      <v-spacer></v-spacer>
      <v-card>
        <v-card-text>{{ this.allInformation[this.form.whichPartOfResume] }}</v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ResumeManage',
  middleware: 'authenticated',
  computed: {
    allInformation() {
      return this.$store.getters['formatStore/allInformation'];
    },
    formIsValid() {
      return this.form.json && this.form.whichPartOfResume;
    },
  },

  created() {
    this.$store.dispatch('formatStore/fetchInformation');
  },
  data() {
    const defaultForm = Object.freeze({
      json: '',
      whichPartOfResume: '',
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        resumePart: [val => (val || '').length > 0 || 'which part of resume?'],
      },
      partOfResume: Object.keys(
        this.$store.getters['formatStore/allInformation'],
      ),
      defaultForm,
    };
  },
  methods: {
    submit() {
      // axios put likes /format/$(whichPartOfResume)
    },
    exit() {
      this.$store.commit('authStore/setAuth', null);
      this.$router.push('/AboutMe');
    },
  },
};
</script>
