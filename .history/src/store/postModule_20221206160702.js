
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

  },
  namespaced: true,
};

export default postModule;
