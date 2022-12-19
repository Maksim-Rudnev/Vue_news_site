import api from '@/api';

const userModule = {
  state: () => ({
    // user: {
    //   id: 0,
    //   login: '',
    //   isAuth: false,
    // },
    // responseMessage: null,
    // isLoading: false,
    // isSignUp: true,
  }),
  getters: {

  },
  mutations: {

  },
  actions: {
    async getUserById() {
      const response = await api.get('users/2');
    }
  },
  namespaced: true,
};

export default userModule;
