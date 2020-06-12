import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://react-project-c1b1e.firebaseio.com/'
});

export default instance;