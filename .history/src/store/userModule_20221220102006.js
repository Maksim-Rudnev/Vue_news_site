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
    setLogin(state, payload) {
      state.login = payload;
    },
    setNews(state, payload) {
      state.news = payload;
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
      commit('setLogin', user.news);
    },
  },
  namespaced: true,
};

export default userModule;
