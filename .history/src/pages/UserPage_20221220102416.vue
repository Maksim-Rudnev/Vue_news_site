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
    ...mapState({
      id: (state) => state.user.id,
      page: (state) => state.post.page,
      isPostLoading: (state) => state.post.isLoading,
      error: (state) => state.post.error,
      dialogVisibleError: (state) => state.post.dialogVisibleError,
      searchQuery: (state) => state.post.searchQuery,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
    }),
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
