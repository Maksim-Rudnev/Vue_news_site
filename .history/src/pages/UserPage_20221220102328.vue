<template>
  <div>
      <h1>Пользователь с id: {{ $route.params.id}}</h1>
      <h2>Новости:</h2>
  </div>
</template>
<script>
import {
  mapActions,
  mapState,
  mapMutations,
} from 'vuex';
import { useRoute } from 'vue-router';

export default {
  data() {
    const { id } = useRoute().params;
    return {
      id,
    };
  },
computed: {

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
