import axios from 'axios';

const userModule = {
  state: () => ({
    responseMessage: null,
    isLoading: false,
    isSignUp: true,
  }),
  getters: {

  },
  mutations: {
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
        // console.log(state.isSignUp);
        let response = '123';
        commit('setLoading', true);
        if (state.isSignUp) {
          response = await axios.post('http://localhost:3001/api/auth/signup', {
            login: _login,
            email: _email,
            password: _password,
          });
        } else {
          console.log(_login, _email, _password);
          response = await axios.post('http://localhost:3001/api/auth/signin', {
            email: _email,
            password: _password,
          });
          console.log(respo);
        }
        commit('setResponseMessage', response.data.message);
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
