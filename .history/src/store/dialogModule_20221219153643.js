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
          state.type.SIGNIN = payload;

      }
    },
  },
  namespaced: true,
};

export default dialogModule;
