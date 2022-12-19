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
    async userSign({ commit, state }, { _login = null, _email, _password }) {
      try {
        let response;
        commit('setLoading', true);
        if (state.isSignUp) {
          response = await axios.post('http://localhost:3001/api/auth/signup', {
            login: _login,
            email: _email,
            password: _password,
          });
          commit('setResponseMessage', response.data.message);
        } else {
          response = await axios.post('http://localhost:3001/api/auth/signin', {
            email: _email,
            password: _password,
          });
          console.log(response.data.);
          commit('setResponseMessage', response.data);
        }
      } catch (err) {
        commit('setResponseMessage', err.response.data.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default userModule;
