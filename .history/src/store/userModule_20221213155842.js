import axios from 'axios';

const userModule = {
  state: () => ({
    // id: '',
    // login: '',
    // email: '',
    // password: '',
  }),
  getters: {

  },
  mutations: {

  },
  actions: {
    async fetchSignIn(_login, _email, _password) {
      try {
        // commit('setLoading', true);
        const response = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
        // commit('setError', err);
        // commit('setDialogVisibleError', true);
      } finally {
        // commit('setLoading', false);
        // commit('setDialogVisibleError', false);
      }
    },
  },
  namespaced: true,
};

export default userModule;
// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
