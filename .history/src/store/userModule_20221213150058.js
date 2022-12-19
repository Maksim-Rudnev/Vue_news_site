import axios from 'axios';

const userModule = {
  state: () => ({

  }),
  getters: {

  },
  mutations: {

  },
  actions: {
    async fetchPost({ commit }) {
      try {
        commit('setLoading', true);
        const responce = await axios.get('http://localhost:3001/api/news');
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
