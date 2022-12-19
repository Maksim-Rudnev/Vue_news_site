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

  },
  actions: {
    async getUserById(ctx, id) {
      const response = await api.get(`users/${id}`);
      console.log(response);
    },
  },
  namespaced: true,
};

export default userModule;
