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
    async userSign({ commit, state }, { _login, _email, _password }) {
      try {
        console.log(state.isSignUp);
        commit('setLoading', true);
        if(state.isSignUp){

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
