const dialogModule = {
  state: () => ({
    signIn: false,
    signUp: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogTypeSignIn(state, payload) {
      state.signIn = payload;
    },
    setDialogTypeSignUp(state, payload) {
      state.signUp = payload;
    },
    setDialogTypeerror(state, payload) {
      state.error = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
