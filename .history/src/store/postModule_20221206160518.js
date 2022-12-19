import axios from 'axios';

const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    error: null,
    dialogVisibleError: false,
    searchQuery: '',
    selectedSort: '',
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По описанию' },
    ],
  }),
  getters: {

  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
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
    async fetchPost({ state, commit }) {
      try {
        commit('setLoading', true);
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit('setTotalPage', Math.ceil(responce.headers['x-total-count'] / state.limit));
        commit('setPosts', [...state.posts, ...responce.data]);
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
