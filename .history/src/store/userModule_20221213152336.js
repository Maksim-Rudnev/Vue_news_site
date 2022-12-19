import axios from 'axios';

const userModule = {
  state: () => ({
    login: '',
    email: '',
    password: ''
  }),
  getters: {

  },
  mutations: {

  },
  actions: {
    async fetchSignIn({ commit }) {
      try {
        commit('setLoading', true);
        const responce = await axios.post('http://localhost:3001/api/auth/signup', {
          login: '9999',
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
