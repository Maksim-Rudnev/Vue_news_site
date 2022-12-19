import axios from 'axios';

axios.interceptors.request.use(
  (config) =>

    config,
  (error) =>
  // Do something with request error
    Promise.reject(error),
);
