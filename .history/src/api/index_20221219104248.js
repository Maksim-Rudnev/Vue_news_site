import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) 
{
  config.headers.a
  return config;
});

export default instance;
