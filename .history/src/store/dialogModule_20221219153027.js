const dialogModule = {
  state: () => ({
    type: {
      'REGI'
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
