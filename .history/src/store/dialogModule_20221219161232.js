const dialogModule = {
  state: () => ({
    signInVisible: false,
    signUpVisible: false,
    errorVisible: false,
    
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
    setDialogTypeError(state, payload) {
      state.error = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
