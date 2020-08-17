import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reboothack12345.herokuapp.com'
});

export default instance;
