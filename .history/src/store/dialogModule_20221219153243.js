const dialogModule = {
  state: () => ({
    type: {
      REGISTRATION: false,
      

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
