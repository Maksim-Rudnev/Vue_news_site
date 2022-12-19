import axios from 'axios';

const userModule = {
  state: () => ({
    error: null,
  }),
  getters: {

  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchSignIn(ctx, { _login, _email, _password }) {
      try {
        console.log(_login, _email, _password);
        const response = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        console.log(response); 
      } catch (err) {
        ctx.commit('setError', err);
      }
    },
  },
  namespaced: true,
};

export default userModule;
