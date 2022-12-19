import axios from 'axios';

const instance = axios.create();

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
