import axios from 'axios';

const postModule = {
  state: () => ({
    limit: 5,
    posts: [],
    page: 1,
    isPostLoading: false,
    error: null,
    dialogVisible: false,
    dialogVisibleError: false,
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
      this.mutations.setPosts();
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
      state.isPostLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setDialogVisible(state, payload) {
      state.dialogVisible = payload;
    },
    setDialogVisibleError(state, payload) {
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
        commit('setLoading', true);
        const responce = await axios.get('http://localhost:3001/api/news');
        commit('setPosts', [...responce.data]);
      } catch (err) {
        commit('setError', err);
        commit('setDialogVisibleError', true);
      } finally {
        commit('setLoading', false);
        commit('setDialogVisibleError', false);
      }
    },
  },
  namespaced: true,
};

export default postModule;
