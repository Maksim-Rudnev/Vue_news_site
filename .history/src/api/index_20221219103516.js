import axios from 'axios';

axios.interceptors.request.use(
  (config) =>
  // Do something before request is sent
    config,
  (error) =>
  // Do something with request error
    Promise.reject(error),
);
