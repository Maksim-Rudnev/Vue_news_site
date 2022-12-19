import axios from 'axios';

axios.interceptors.request.use(
  (config) =>
  headers: {
    Authorization: `Basic ${localStorage.getItem('token')}`,
  },
    config,
  (error) =>

    Promise.reject(error),
);
