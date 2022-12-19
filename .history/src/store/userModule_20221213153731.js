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
    async fetchSignIn({ commit }, _login, _email, password) {
      try {
        commit('setLoading', true);
        const responce = await axios.post('http://localhost:3001/api/auth/signup', {
          login: login,
          email: '9999@yandex.com',
          password: '9999',
        });
        commit('setPosts', [...responce.data]);
      } catch (err) {
        commit('setError', err);
        commit('setDialogVisibleError', true);
      } finally {
        commit('setLoading', false);
        commit('setDialogVisibleError', false);
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
