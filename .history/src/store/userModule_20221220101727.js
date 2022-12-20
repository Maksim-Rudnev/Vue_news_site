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
  },

  actions: {
    async getUserById({ commit }, id) {
      const { user } : { data } = await api.get(`users/${id}`);
      console.log(data.email);
      commit('setId', id);
      commit('setEmail', data.email);
    },
  },
  namespaced: true,
};

export default userModule;
