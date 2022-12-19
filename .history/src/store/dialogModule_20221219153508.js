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

      }
    },
  },
  namespaced: true,
};

export default dialogModule;
