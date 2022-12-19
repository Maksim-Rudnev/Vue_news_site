import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use((config) => {
  // config.headers.authorization = localStorage.getItem('token');
  return {
    ...config,
    headers.authorization: localStorage.getItem('token'),
  }
});
api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = readTokenFromLS();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
