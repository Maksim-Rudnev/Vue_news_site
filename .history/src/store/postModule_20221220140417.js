import api from '@/api';

const postModule = {
  state: () => ({
    limit: 5,
    posts: [],
    page: 1,
    isLoading: false,
    error: null,
    dialogVisibleError: false, //
    searchQuery: '',
    selectedSort: 'title',
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'text', name: 'По описанию' },
      { value: 'tags', name: 'По тегам' },
      { value: 'user.login', name: 'По авторам' },
    ],
  }),
  getters: {
    sortedPost(state) {
      return [...state.posts]
        .sort((post1, post2) => String(post1[state.selectedSort] ?? post1.user.login)
          ?.localeCompare(String(post2[state.selectedSort] ?? post2.user.login)));
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPost.filter((post) => String(post[state.selectedSort] ?? post.user.login)
        .toLowerCase().includes(state.searchQuery.toLowerCase()));
    },
    slicePost(state, getters) {
      return getters.sortedAndSearchedPosts
        .slice((state.page - 1) * state.limit, state.page * state.limit);
    },
    countPage(state, getters) {
      return Math.ceil(getters.sortedAndSearchedPosts.length / state.limit);
    },
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setPage(state, payload) {
      state.page = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setDialogVisibleError(state, payload) { //
      state.dialogVisibleError = payload;
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload;
    },
    setSelectedSort(state, payload) {
      state.selectedSort = payload;
    },
  },
  actions: {
    async fetchPost({ commit }) {
      try {
        commit('setError', null);
        commit('setLoading', true);
        const { data } = await api.get('news');
        commit('setPosts', [...data]);
      } catch (err) {
        commit('setError', err);
        commit('setDialogVisibleError', true); //
        console
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default postModule;
