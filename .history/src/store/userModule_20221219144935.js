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
    setUser(state, {payload: { id }}) {
      state.user = id;
    },
  },
  actions: {
    async getUserById({ commit }, id) {
      const { data } = await api.get(`users/${id}`);
      commit('setUser', data.user);
      console.log(data);
    },
  },
  namespaced: true,
};

export default userModule;
