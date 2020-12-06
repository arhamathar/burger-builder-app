import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2388a-default-rtdb.firebaseio.com/'
});

export default instance;