import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-selfcheck.cyclic.app/api'
});

export default api;