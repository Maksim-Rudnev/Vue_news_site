<template>
  <div>
      <h1>Пользователь с id: {{ $route.params.id }}</h1>
  </div>
</template>
<script>
import {
  mapActions,
} from 'vuex';

export default {
  mounted: {
    getUserById(route.params.id)
  }
  methods: {
    ...mapActions({
      getUserById: 'user/getUserById',
    }),
  },
};
</script>
<style>
</style>
