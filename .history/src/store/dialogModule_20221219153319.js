const dialogModule = {
  state: () => ({
    type: {
      SIGNIN: false,
      SIGNUP: false,
      ER
      

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
