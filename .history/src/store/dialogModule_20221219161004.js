const dialogModule = {
  state: () => ({
    signIn: false,
    signUp: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setDialogTypeS(state, payload) {
      state.signIn = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
