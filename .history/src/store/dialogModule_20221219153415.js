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
    set(state, payload) {
      state.user = { ...payload };
    },
  },
  namespaced: true,
};

export default dialogModule;
