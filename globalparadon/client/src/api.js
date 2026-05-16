import axios from 'axios';

const api = axios.create({
  baseURL: 'https://globalparadon-api.vercel.app/api'
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('cpUser') || 'null');

  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;