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
    async getUserById({}, id) {
      const response = await api.get(`users/${id}`);
      setUser('setPosts', [...response.data]);
      console.log(response);
    },
  },
  namespaced: true,
};

export default userModule;
