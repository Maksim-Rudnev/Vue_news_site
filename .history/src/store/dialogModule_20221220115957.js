const dialogModule = {
  state: () => ({
    visible: false,
    type: '',
  }),
  getters: {

  },
  mutations: {
    setVisible(state, payload) {
      state.visible = payload;
    },
    setType(state, payload) {
      state.type = payload;
    },
  },
  actions: {
    
  },
  namespaced: true,
};

export default dialogModule;
