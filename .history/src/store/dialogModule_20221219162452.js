const dialogModule = {
  state: () => ({
    sign
    errorVisible: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogSignInVisible(state, payload) {
      state.signInVisible = payload;
    },
    setDialogSignUpVisible(state, payload) {
      state.signUpVisible = payload;
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
