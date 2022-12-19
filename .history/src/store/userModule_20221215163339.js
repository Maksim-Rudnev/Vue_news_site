import axios from 'axios';

const userModule = {
  state: () => ({
    error: null,
    isLoading: false,
  }),
  getters: {

  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async fetchSignIn(ctx, { _login, _email, _password }) {
      try {
        ctx.commit('setError', err);
        ctx.commit('setLoading', true);
        console.log(_login, _email, _password);
        const response = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        console.log(response);
      } catch (err) {
        ctx.commit('setError', err);
      } finally {
        ctx.commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default userModule;
