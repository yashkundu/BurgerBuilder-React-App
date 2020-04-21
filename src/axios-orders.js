import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-1cdbc.firebaseio.com/'
});

export default instance;