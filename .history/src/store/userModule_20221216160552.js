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
    async userSign(ctx, { _login, _email, _password }) {
      try {
        let response;
        ctx.commit('setLoading', true);
        if (this.isSignUp) {
          response = await axios.post('http://localhost:3001/api/auth/signup', {
            login: _login,
            email: _email,
            password: _password,
          });
        }
        // const response = await axios.post('http://localhost:3001/api/auth/signup', {
        //   login: _login,
        //   email: _email,
        //   password: _password,
        // });
        ctx.commit('setResponseMessage', response.data.message);
      } catch (err) {
        ctx.commit('setResponseMessage', err.response.data.message);
      } finally {
        ctx.commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default userModule;
