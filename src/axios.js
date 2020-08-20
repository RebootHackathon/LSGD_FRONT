import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reboothack12345.herokuapp.com',
    // baseURL: 'http://localhost:8000',
});

export default instance;
