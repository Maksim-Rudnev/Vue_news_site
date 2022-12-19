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
    async whoAmI({ commit, state }) {
      try {
        commit('setError', null);
        commit('setLoading', true);
        const response = await api.get('auth/whoami');
      } catch (err) {
        commit('setError', err);
        commit('setDialogVisibleError', true);
      } finally {
        commit('setLoading', false);
        console.log(respo);
      }
    },
    async userSign({ commit, state }, { _login = null, _email, _password }) {
      try {
        let response;
        commit('setLoading', true);
        if (state.isSignUp) {
          response = await api.post('auth/signup', {
            login: _login,
            email: _email,
            password: _password,
          });
          commit('setResponseMessage', response.data.message);
        } else {
          response = await api.post('auth/signin', {
            email: _email,
            password: _password,
          });
          // console.log(response.data.token);
          commit('setUserId', response.data.authUser.id);
          commit('setUserLogin', response.data.authUser.login);
          commit('setUserAuth', true);
          localStorage.setItem('token', response.data.token);
          console.log(localStorage.getItem('token'));
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
