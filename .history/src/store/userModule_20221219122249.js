import axios from 'axios';

const userModule = {
  state: () => ({
    user: {
      id: 0,
      login: '',
      isAuth: false,
    },
    responseMessage: null,
    isLoading: false,
    isSignUp: true,
  }),
  getters: {

  },
  mutations: {
    setUserId(state, payload) {
      state.user.id = payload;
    },
    setUserLogin(state, payload) {
      state.user.login = payload;
    },
    setUserAuth(state, payload) {
      state.user.isAuth = payload;
    },
    setResponseMessage(state, payload) {
      state.responseMessage = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSignUp(state, payload) {
      state.isSignUp = payload;
    },
  },
  actions: {
   
  namespaced: true,
};

export default userModule;
