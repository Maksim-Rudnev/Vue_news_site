import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) 
{
  config.headers.auto
  return config;
});

export default instance;
