const dialogModule = {
  state: () => ({
    signVisible: false,
    errorVisible: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogsignVisible(state, payload) {
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
