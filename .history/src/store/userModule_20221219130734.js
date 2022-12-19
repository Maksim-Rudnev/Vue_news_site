// import api from '@/api';

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
    async getUserById(ctx ,id) {
      console.log(id);
      // const response = await api.get('users/' + id);
      // console.log(response);
    },
  },
  namespaced: true,
};

export default userModule;
