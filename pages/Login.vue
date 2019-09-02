<template>
  <v-container>
    <div>
      <h2>Login</h2>
      <v-spacer></v-spacer>
      <v-form ref="form" v-model="valid">
        <div>
          <v-text-field
            v-model="username"
            :counter="1024"
            :rules="nameRules"
            label="username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :counter="1024"
            :rules="passwordRules"
            label="password"
            required
          ></v-text-field>
          <v-btn class="green lighten-5" :disabled="!valid" color="green" @click="login">Login</v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  name: 'login',
  data() {
    return {
      valid: false,
      username: '',
      nameRules: [v => !!v || 'Name is required'],
      password: '',
      passwordRules: [v => !!v || 'password is required'],
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        // eslint-disable-next-line indent
        setTimeout(() => {
          // we simulate the async request with timeout.
          const auth = {
            accessToken: 'someStringGotFromApiServiceWithAjax',
          };
          this.$store.commit('authStore/setAuth', auth); // mutating to store for client rendering
          Cookie.set('auth', auth); // saving token in cookie for server rendering
          this.$router.push('/ResumeManage');
        }, 1000);
        console.log('validate success');
      }
    },
  },
};
</script>
