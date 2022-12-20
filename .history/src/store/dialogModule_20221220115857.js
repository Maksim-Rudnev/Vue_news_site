const dialogModule = {
  state: () => ({
    visible: false,
    type: '',
  }),
  getters: {

  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {

  },
  namespaced: true,
};

export default dialogModule;
