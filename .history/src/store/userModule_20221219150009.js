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
    async getUserById({ commit, state }, id) {
      const { data } = await api.get(`users/${id}`);
      commit('setUser', data.user);
      console.log(state.user);
    },
  },
  namespaced: true,
};

export default userModule;
