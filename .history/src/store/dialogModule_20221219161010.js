const dialogModule = {
  state: () => ({
    signIn: false,
    signUp: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogTypeSign(state, payload) {
      state.signIn = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
