<template>
  <div>
      <div><strong>Почта:</strong>{{ email }}</div>
      <div><strong>Логин:</strong>{{ login }}</div>
      <post-list :posts="news" v-if="!isLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>
<script>
import {
  mapActions,
  mapState,
  mapMutations,
} from 'vuex';
import { useRoute } from 'vue-router';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostList,
  },
  data() {
    let { id } = useRoute().params;
    return {
      id,
    };
  },
  watch: {
    id() {
      console.log(this.id);
    },
  },
  computed: {
    ...mapState({
      email: (state) => state.user.email,
      avatar: (state) => state.user.avatar,
      login: (state) => state.user.login,
      isLoading: (state) => state.user.isLoading,
      news: (state) => state.user.news,
      error: (state) => state.user.error,
    }),
  },
  methods: {
    ...mapMutations({
      setAvatar: 'user/setAvatar',
      setEmail: 'user/setEmail',
      setLogin: 'user/setLogin',
      setNews: 'user/setNews',
      setLoading: 'user/setLoading',
      setError: 'user/setError',
    }),
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
