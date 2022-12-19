<template>
  <div>
      <h1>Пользователь с id: {{ $route.params.id}}</h1>
  </div>
</template>
<script>
import {
  mapActions,
} from 'vuex';

export default {
  methods: {
    ...mapActions({
      getUserById: 'user/getUserById',
    }),
  },
  beforeMount() {
    this.getUserById($route.params.id);
  },
};
</script>
<style>
</style>
