import axios from 'axios';

const instance = axios.create();
instance.interceptors.request.use(function (config) 
{
  
});

export default instance;
