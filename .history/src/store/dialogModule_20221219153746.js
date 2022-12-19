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
    setDialogType(state, type, payload) {
      switch (type) {
        case 'SIGNIN':
          state.type.LIGNIN = payload;
          break;
        case 'SIGNUP':
          state.type.SIGNUP = payload;
          break;
        case 'ERROR':
          state.type.ERROR = payload;
          break;
      }
    },
  },
  namespaced: true,
};

export default dialogModule;
