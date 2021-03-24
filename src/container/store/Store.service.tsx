import { http } from "../../core/http/Http.interceptor";
//import { InterfacePagination } from './interface/StorePagination';
import Store from './interface/Item';
import { ResponsePagination } from "../../core/interfaces/ResponsePagination";
import { Status } from './interface/Status';

const URL: string = 'store/items';

export const getStore = (params?: any) => {
    return http.get<ResponsePagination>(URL, { params: params })
}

export const getByStore = (id: string) => {
    return http.get<Store>(`${URL}/${id}`)
}

export const postStore = (store: Store) => {
    return http.post<Store>(`${URL}`, store)
}

export const deleteStore = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putStore = (store: Store) => {
    return http.put<Store>(`${URL}/${store._id}`, store)
}

export const getAllOrders = (id: string, params?: Status) => {
    return http.get<any>(`${URL}/${id}/orders`, { params: params })
}

export const putAllOrders = (id: string, idOrders: string, status: Status) => {
    return http.put<any>(`${URL}/${id}/orders/${idOrders}`, status)
}