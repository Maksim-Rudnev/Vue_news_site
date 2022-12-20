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
    setId(state, payload) {
      state.id = payload;
    },
    setAvatar(state, payload) {
      state.avatar = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
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
