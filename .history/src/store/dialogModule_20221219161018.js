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
    setDialogTypeSignIn(state, payload) {
      state.signIn = payload;
    },
    setDialogTypeSignIn(state, payload) {
      state.signIn = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
