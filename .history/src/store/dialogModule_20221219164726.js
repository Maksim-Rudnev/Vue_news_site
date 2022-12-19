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
    setDialogErrorVisible(state, payload) {
      state.errorVisible = payload;
    },
    setDialogError(state, payload) {
      state.error = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
