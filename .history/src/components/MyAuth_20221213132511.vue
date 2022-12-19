<!-- eslint-disable consistent-return -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <form id="app" @submit="checkForm" action="https://vuejs.org/" method="post" novalidate="true">

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    </p>

    <p>
      <label for="name">Name</label>
      <input id="name" v-model="name" type="text" name="name">
    </p>

    <p>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" name="email">
    </p>

    <p>
      <label for="movie">Favorite Movie</label>
      <select id="movie" v-model="movie" name="movie">
        <option>Star Wars</option>
        <option>Vanilla Sky</option>
        <option>Atomic Blonde</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</template>

<script>
export default {
  name: 'my-button',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      movie: null,
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>

</style>
