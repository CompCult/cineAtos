import axios from 'axios';

const apiBaseURL = axios.create({
	baseURL: 'https://cine-porto-api.herokuapp.com/'
});

export default apiBaseURL;