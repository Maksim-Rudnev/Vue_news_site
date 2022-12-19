const dialogModule = {
  state: () => ({
    signVisible: false,
    errorVisible: false,
    error: null,
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
