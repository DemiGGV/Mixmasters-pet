import axios from 'axios';

axios.defaults.baseURL = 'https://mixmasters.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3003/api';

// Utils

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
