import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/UserPagination';
import User from './interface/User';
import { ResponsePagination } from "../../core/interfaces/ResponsePagination";

const URL: string = 'users';

export const getUser = (params?: InterfacePagination) => {
    return http.get<ResponsePagination>(URL, { params: params })
}

export const getByUser = (id: string) => {
    return http.get<User>(`${URL}/${id}`)
}

export const postUser = (user: User) => {
    return http.post<User>(`${URL}/register`, user)
}

export const deleteUser = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putUser = (user: User) => {
    return http.put<User>(`${URL}/${user._id}`, user)
}