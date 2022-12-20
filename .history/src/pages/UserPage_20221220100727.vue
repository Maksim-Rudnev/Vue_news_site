<template>
  <div>
      <h1>Пользователь с id: {{ $route.params.id}}</h1>
      <h2></h2>
  </div>
</template>
<script>
import {
  mapActions,
} from 'vuex';
import { useRoute } from 'vue-router';

export default {
  data() {
    const { id } = useRoute().params;
    return {
      id,
    };
  },

  methods: {
    ...mapActions({
      getUserById: 'user/getUserById',
    }),
  },
  beforeMount() {
    this.getUserById(this.id);
  },
};
</script>
<style>
</style>
