import axios from 'axios';

const apiBaseURL = axios.create({
	baseURL: 'https://backend-pavitech.herokuapp.com/'
});

export default apiBaseURL;