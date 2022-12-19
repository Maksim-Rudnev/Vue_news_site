import api from '@/api';

const userModule = {
  state: () => ({
    user: {},
    // responseMessage: null,
    isLoading: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setUser(state, payload) {
      state.user = {...payload };
    },
  },
  actions: {
    async getUserById({ commit }, id) {
      const response = await api.get(`users/${id}`);
      commit('setUser', ...response.data);
      console.log(response);
    },
  },
  namespaced: true,
};

export default userModule;
