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
      state.avatar = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setLogin(state, payload) {
      state.login = payload;
    },
    setNews(state, payload) {
      state.news = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },

  actions: {
    async getUserById({ commit }, id) {
      const { data } = await api.get(`users/${id}`);
      const { user } = data;
      commit('setId', user.id);
      commit('setAvatar', user.avatar);
      commit('setEmail', user.email);
      commit('setLogin', user.login);
      commit('setNews', user.news);
    },
  },
  namespaced: true,
};

export default userModule;
