import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});

axios.interceptors.request.use(
  (config) =>
  headers: {
    Authorization: `Basic ${localStorage.getItem('token')}`,
  },
    config,
  (error) =>

    Promise.reject(error),
);
