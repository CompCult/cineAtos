import { Response } from "../../core/auth/Response";
import { http } from "../../core/http/Http.interceptor";
import User from './interface/Login';

const URL: string = 'users/auth';

export const authService = (user: User) => {
    return http.post<Response>(URL, user)
}