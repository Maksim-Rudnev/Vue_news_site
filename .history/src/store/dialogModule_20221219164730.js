const dialogModule = {
  state: () => ({
    signVisible: false,
  }),
  getters: {

  },
  mutations: {
    setDialogSignVisible(state, payload) {
      state.signVisible = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
