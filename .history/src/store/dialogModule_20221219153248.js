const dialogModule = {
  state: () => ({
    type: {
      si: false,
      

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
