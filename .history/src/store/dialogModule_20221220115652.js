import api from '@/api';

const dialogModule = {
  state: () => ({
    
  }),
  getters: {

  },
  mutations: {

  },
  actions: {
    async fetchPost({ commit }) {
      try {
        commit('setError', null);
        commit('setLoading', true);
        const { data } = await api.get('news');
        commit('setPosts', [...data]);
      } catch (err) {
        commit('setError', err);
        commit('setDialogVisibleError', true);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default dialogModule;
