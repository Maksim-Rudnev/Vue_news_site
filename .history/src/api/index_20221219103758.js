import axios from 'axios';

const api = axios.create();

axios.interceptors.request.use(
  (config) =>
  headers: {
    Authorization: `Basic ${localStorage.getItem('token')}`,
  },
    config,
  (error) =>

    Promise.reject(error),
);

export default api;