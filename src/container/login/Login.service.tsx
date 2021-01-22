import { http } from "../../core/http/Http.interceptor";
import User from './interface/Login';

const URL: string = 'users/auth';

export const postLogin = (user: User) => {
    return http.post<any>(URL, user)
}