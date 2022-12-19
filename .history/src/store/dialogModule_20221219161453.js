const dialogModule = {
  state: () => ({
    signInVisible: false,
    signUpVisible: false,
    errorVisible: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogSignInVisible(state, payload) {
      state.signInVisible = payload;
    },
    setDialogsignUpVisible(state, payload) {
      state.signUpVisible = payload;
    },
    setDialogTypeError(state, payload) {
      state.errorVisible = payload;
    },
    setDialogError(state, payload) {
      state.error = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
