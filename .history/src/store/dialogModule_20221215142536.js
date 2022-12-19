const dialogModule = {
  state: () => ({
    error: null,
    dialogVisible: false,
    dialogVisibleError: false,
  }),
  getters: {

  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setDialogVisible(state, payload) {
      state.dialogVisible = payload;
    },
    setDialogVisibleError(state, payload) {
      state.dialogVisibleError = payload;
    },
  },
  actions: {
    someAction: {
      
    }
    sayHi() {
      console.log('hi');
    },
  },
  namespaced: true,
};

export default dialogModule;
