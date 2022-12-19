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
    placeHolder: '',
    selectedSort: 'title',
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'text', name: 'По описанию' },
      { value: 'tags', name: 'По тегам' },
      { value: 'user.id', name: 'По авторам' },
    ],
  }),
  getters: {
    sortedPost(state) {
      return [...state.posts].sort((post1, post2) => String(post1[state.selectedSort] ?? p)
        ?.localeCompare(String(post2[state.selectedSort])));
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPost.filter((post) => {
        console.log(post[state.selectedSort]);
        return String(post[state.selectedSort])
          .toLowerCase().includes(state.searchQuery.toLowerCase());
      });
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
    setSelectedSearch(state, payload) {
      state.selectedSearch = payload;
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
