const dialogModule = {
  state: () => ({
    signIn: false,
    SIGNUP: false,
    ERROR: null,
  }),
  getters: {

  },
  mutations: {
    setDialogTypeS(state, payload) {
      state.type.SIGNIN = payload;
    },
  },

  namespaced: true,
};

export default dialogModule;
