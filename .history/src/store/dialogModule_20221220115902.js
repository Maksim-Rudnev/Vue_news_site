const dialogModule = {
  state: () => ({
    visible: false,
    type: '',
  }),
  getters: {

  },
  mutations: {
    setvisible(state, payload) {
      state.posts = payload;
    },
  },
  actions: {

  },
  namespaced: true,
};

export default dialogModule;
