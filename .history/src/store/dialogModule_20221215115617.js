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
    SetDialogVisible({ commit }, payload) {
      commit('setDialogVisibleError', payload);
    },
  },
  namespaced: true,
};

export default dialogModule;
