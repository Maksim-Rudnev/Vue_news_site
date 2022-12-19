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
        console.log(_login, _email, _password);
        const response = await axios.post('http://localhost:3001/api/auth/signup', {
          login: _login,
          email: _email,
          password: _password,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};

export default userModule;
