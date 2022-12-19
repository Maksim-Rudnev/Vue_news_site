import axios from 'axios';

axios.interceptors.request.use(
  (config) =>

    config,
  (error) =>

    Promise.reject(error),
);
