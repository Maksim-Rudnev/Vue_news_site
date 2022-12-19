import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use((config) => {
  // config.headers.authorization = localStorage.getItem('token');
  return ...config.headers.authorization = localStorage.getItem('token');
});

export default instance;
