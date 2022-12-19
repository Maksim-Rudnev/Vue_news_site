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
    setSignInVisible(state, payload) {
      state.signInVisible = payload;
    },
    setDialogTypeSignUp(state, payload) {
      state.signUpVisible = payload;
    },
    setDialogTypeError(state, payload) {
      state.errorVisible = payload;
    },
    setDialogTypeError(state, payload) {
      state.errorVisible = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
