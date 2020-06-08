import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44333/api',
});

export default api;