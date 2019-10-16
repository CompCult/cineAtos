import axios from 'axios';
import { getToken } from "./Auth";
const apiBaseURL = axios.create({
	baseURL: 'https://cine-porto-api.herokuapp.com/'
});

apiBaseURL.interceptors.request.use(async config => {
	const token = getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});


export default apiBaseURL;