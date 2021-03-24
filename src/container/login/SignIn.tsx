import { login } from '../../core/auth/auth';
import { authService } from './Login.service';
import User from './interface/Login';

const signIn = async (credentials: User) => {

    const { data } = await authService(credentials);

    if (data && (data.type === 'gestor' || data.type === 'professor')) {
        login(data);
    } else {
        throw new Error('Email ou senha incorretas!');
    }
};

export default signIn;