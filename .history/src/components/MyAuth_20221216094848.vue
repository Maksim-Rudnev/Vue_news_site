<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <form id="app" @submit="checkForm" novalidate="true">

    <p v-if="errorsValid.length">
      <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errorsValid" :key="error.id">{{ error }}</li>
    </ul>
    </p>

    <p v-if="this.type == ">
      <label for="login">Login</label>
      <input id="login" v-model="login" type="text" name="login">
    </p>

    <p>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" name="email">
    </p>

    <p>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" name="password">
    </p>

    <p>
      <input type="submit" value="Submit">
      <!-- <my-input type="submit" value="Submit"></my-input> -->
    </p>
    <p v-if="error">
      {{ error }}
    </p>
  </form>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'my-auth',
  data() {
    return {
      errorsValid: [],
      login: null,
      email: null,
      password: null,
      type: 'singUp',
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.user.isLoading,
      error: (state) => state.user.error,
    }),
  },

  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errorsValid = [];

      if (!this.login) {
        this.errorsValid.push('login required.');
      }
      if (!this.password) {
        this.errorsValid.push('password required.');
      }
      if (!this.email) {
        this.errorsValid.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errorsValid.push('Valid email required.');
      }

      if (!this.errorsValid.length) {
        this.fetchSignIn({
          _login: this.login,
          _email: this.email,
          _password: this.password,
        });
      }
      return false;
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    ...mapActions({
      fetchSignIn: 'user/fetchSignIn',
    }),
  },
};
</script>

<style scoped>

</style>
