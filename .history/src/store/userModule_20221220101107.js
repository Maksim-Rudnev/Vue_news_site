import api from '@/api';

const userModule = {
  state: () => ({
    id: 0,
    avatar: null,
    email: '',
    login: '',

    news: [],
    // responseMessage: null,
    isLoading: false,
    error: null,
  }),
  getters: {

  },
  mutations: {
    setAvatar(state, payload) {
      state.avatar = { ...payload };
    },
  },

  actions: {
    async getUserById({ commit }, id) {
      const { data } = await api.get(`users/${id}`);
      // commit('setUser', data.user);
    },
  },
  namespaced: true,
};

export default userModule;
