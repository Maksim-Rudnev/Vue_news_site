import axios from 'axios';

const postModule = {
  state: () => ({
    posts: [],
    page: 1,
    limit: 8,
    totalPage: 0,
    isPostLoading: false,
    error: null,
    dialogVisibleError: false,
    searchQuery: '',
    selectedSort: '',
    sortOptions: [
      { value: '', name: 'Все' },
      { value: 'title', name: 'По названию' },
      { value: 'text', name: 'По описанию' },
      { value: 'tags', name: 'По тегам' },
      { value: 'user.login', name: 'По авторам' },
    ],
  }),
  getters: {
    sortedPost(state) {
      console.log(state.selectedSort);
      console.log(state.post.user;
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]
        ?.localeCompare(post2[state.selectedSort]));
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPost.filter((post) => post.title.toLowerCase()
        .includes(state.searchQuery.toLowerCase()));
    },
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setPage(state, payload) {
      state.page = payload;
    },
    setTotalPage(state, payload) {
      state.totalPage = payload;
    },
    setLoading(state, payload) {
      state.isPostLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
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
