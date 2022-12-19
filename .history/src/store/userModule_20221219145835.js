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
      state.user = { ...payload };
    },
  },

  actions: {
    async getUserById({ commit }, id) {
      const { data } = await api.get(`users/${id}`);
      commit('setUser', data.user);
      console.log(t);
    },
  },
  namespaced: true,
};

export default userModule;
