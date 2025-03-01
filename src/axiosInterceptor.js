import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ictak-internship-portal-server-alpha.vercel.app/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      // You might want to use 'Authorization' header instead
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
