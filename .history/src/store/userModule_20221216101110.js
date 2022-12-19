import axios from 'axios';

const userModule = {
  state: () => ({
    responseMessage: null,
    isLoading: false,
    
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
  },
  actions: {
    async fetchSignUp(ctx, { _login, _email, _password }) {
      try {
        ctx.commit('setResponseMessage', null);
        ctx.commit('setLoading', true);
        console.log(_login, _email, _password);
        const response = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        console.log(response);
        ctx.commit('setResponseMessage', 'Успешно');
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
