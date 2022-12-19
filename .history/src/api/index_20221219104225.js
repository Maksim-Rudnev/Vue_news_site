import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) 
{
  localStorage.getItem('token')
});

export default instance;
