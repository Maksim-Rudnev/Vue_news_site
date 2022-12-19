import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) {
  config.headers.authorization = localStorage.getItem('token');
  return config;
});

export default instance;
