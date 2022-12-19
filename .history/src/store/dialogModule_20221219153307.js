const dialogModule = {
  state: () => ({
    type: {
      SIGNIN: false,
      SIGNUP: FA
      

    },
  }),
  getters: {

  },
  mutations: {
    setUser(state, payload) {
      state.user = { ...payload };
    },
  },
  namespaced: true,
};

export default dialogModule;
