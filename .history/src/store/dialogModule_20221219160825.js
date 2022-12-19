const dialogModule = {
  state: () => ({
    type: {
      SIGNIN: false,
      SIGNUP: false,
      ERROR: null,
    },
  }),
  getters: {

  },
  mutations: {
    setDialogType(state, payload]) {
        state.type.SIGNIN = payload;
      }
    },
  },
  namespaced: true,
};

export default dialogModule;
