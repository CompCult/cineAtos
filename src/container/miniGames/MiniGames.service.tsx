import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/MiniGamesPagination';
import MiniGames from './interface/MiniGames';

const URL: string = 'miniGames/memories';

export const getMiniGamesMemories = (params?: any) => {
    return http.get<Array<MiniGames>>(URL, { params: params })
}

export const getByMiniGamesMemories = (id: string) => {
    return http.get<MiniGames>(`${URL}/${id}`)
}

export const postMiniGamesMemories = (MiniGames: MiniGames) => {
    return http.post<MiniGames>(`${URL}/register/`, MiniGames)
}

export const deleteMiniGamesMemories = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putMiniGamesMemories = (MiniGames: MiniGames) => {
    return http.put<MiniGames>(`${URL}/${MiniGames._id}`, MiniGames)
}