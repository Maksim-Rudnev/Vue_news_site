const dialogModule = {
  state: () => ({
    type: {
      SIGNIN: false,
      SI
      

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
