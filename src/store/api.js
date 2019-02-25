import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appsheettest1.azurewebsites.net/sample',
});

export default api;
