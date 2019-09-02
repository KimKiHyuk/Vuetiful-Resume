<template>
  <v-container>
    <v-btn class="Red lighten-5" @click="exit">exit</v-btn>
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
        <v-textarea v-model="form.bio" color="teal">
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
          color="primary"
          type="submit"
          @click="submit"
        >submit</v-btn>
      </v-form>
      <v-spacer></v-spacer>
      <v-card>
        <v-text>layout about data</v-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ResumeManage',
  middleware: 'authenticated',
  computed: {
    formIsValid() {
      return this.form.bio && this.form.whichPartOfResume;
    },
  },
  data() {
    const defaultForm = Object.freeze({
      bio: '',
      whichPartOfResume: '',
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        resumePart: [val => (val || '').length > 0 || 'which part of resume?'],
      },
      partOfResume: ['aboutme', 'career', 'education', 'project', 'skill'],
      defaultForm,
    };
  },
  methods: {
    submit() {
      console.log(this.form);
    },
    exit() {
      this.$store.commit('authStore/setAuth', null);
      this.$router.push('/AboutMe');
    },
  },
};
</script>
