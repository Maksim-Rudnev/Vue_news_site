<template>
  <div>
      <h1>Пользователь с id: {{ $route.params.id}}</h1>
  </div>
</template>
<script>
import {
  mapActions,
} from 'vuex';
import { useRoute } from 'vue-router';

export default {
  data() {
    const route = useRoute();
    const id = route.params.id;
    return {
      id,
    },
},

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
