import axios from 'axios';
import { useSnackbar } from '../../context/Snackbar';
import { getToken } from "../auth/auth";

const TIMEOUT_ERROR_MESSAGE = 'timeoutErrorMessage';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
	baseURL: 'https://cine-porto-api.herokuapp.com/',
});

instance.interceptors.request.use(
	async (config) => {
		const user: any = getToken();
		if (user) {
			config.headers.Authorization = `Bearer ${user.token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	async (response) => {
		return response;
	},
	(error) => {
		const { snackbar, setSnackbar } = useSnackbar();

		if (error.message === TIMEOUT_ERROR_MESSAGE || error.code === 'ECONNABORTED') {
			setSnackbar({ ...snackbar, msg: "Tempo de requisição limite excedido!", type: 'error' });

		} else if (error) {
			setSnackbar({ ...snackbar, msg: "Erro Interno. Por favor, contate o administrador!", type: 'error' });
		}

		return Promise.reject(error);
	}
);

export const http = instance;
