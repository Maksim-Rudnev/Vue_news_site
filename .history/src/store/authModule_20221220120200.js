import api from '@/api';

const authModule = {
  state: () => ({
    user: {
      id: 0,
      login: '',
      isAuth: false,
    },
    responseMessage: null,
    isLoading: false,
    signVisible: false,
    isSignUp: true,
  }),
  getters: {

  },
  mutations: {
    setUserId(state, payload) {
      state.user.id = payload;
    },
    setUserLogin(state, payload) {
      state.user.login = payload;
    },
    setUserAuth(state, payload) {
      state.user.isAuth = payload;
    },
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
    async whoAmI({ commit }) {
      try {
        if (localStorage.getItem('token')) {
          commit('setLoading', true);
          const { data } = await api.get('auth/whoami');
          commit('setUserId', data.authUser.id);
          commit('setUserLogin', data.authUser.login);
          commit('setUserAuth', true);
        }
      } catch (err) {
        commit('setResponseMessage', err.response.data.message);
      } finally {
        commit('setLoading', false);
      }
    },

    async userSign({ commit, state }, { _login = null, _email, _password }) {
      try {
        commit('setLoading', true);
        commit('setResponseMessage', null);
        if (state.isSignUp) {
          const { data } = await api.post('auth/signup', {
            login: _login,
            email: _email,
            password: _password,
          });
          commit('setResponseMessage', data.message);
        } else {
          const { data } = await api.post('auth/signin', {
            email: _email,
            password: _password,
          });
          commit('setUserId', data.authUser.id);
          commit('setUserLogin', data.authUser.login);
          commit('setUserAuth', true);
          localStorage.setItem('token', data.token);
        }
      } catch (err) {
        commit('setResponseMessage', err.response.data.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};

export default authModule;
