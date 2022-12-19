const dialogModule = {
  state: () => ({
    type: {
      SIGNIN: false,
      S
      

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
