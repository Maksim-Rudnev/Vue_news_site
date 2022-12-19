const dialogModule = {
  state: () => ({
    SIGNIN: false,
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
