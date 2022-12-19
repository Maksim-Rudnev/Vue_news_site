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
    async fetchSignIn({ commit }, _login, _email, _password) {
      try {
        // commit('setLoading', true);
        const responce = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        // commit('setPosts', [...responce.data]);
        console.log(res);
      } catch (err) {
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
