import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com',
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default axiosInstance;
