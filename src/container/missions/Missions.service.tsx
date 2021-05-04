import { http } from "../../core/http/Http.interceptor";
import { InterfacePagination } from './interface/MissionsPagination';
import Missions from './interface/Missions';
import MissionsStatus from './interface/MissionsStatus';
import { ResponsePagination } from "../../core/interfaces/ResponsePagination";

const URL: string = 'missions';

export const getMissions = (params?: InterfacePagination) => {
    return http.get<ResponsePagination>(URL, { params: params })
}

export const getByMissions = (id: string) => {
    return http.get<Missions>(`${URL}/${id}`)
}

export const getByMissionsStatus = (id: string, params?: any) => {
    return http.get<Array<Missions>>(`${URL}/${id}/answers`, { params: params })
}

export const getSeeAnswerMissions = (id: string, idSeeAnswer: string) => {
    return http.get<MissionsStatus>(`${URL}/${id}/answers/${idSeeAnswer}`)
}

export const postMissions = (missions: Missions) => {
    return http.post<Missions>(`${URL}`, missions)
}

export const deleteMissions = (id: string) => {
    return http.delete<string>(`${URL}/${id}`)
}

export const putMissions = (missions: Missions) => {
    return http.put<Missions>(`${URL}/${missions._id}`, missions)
}

export const putSeeMyAnswer = (idMissions: string, idSeeAnswer: string, status: string) => {
    return http.put<Missions>(`${URL}/${idMissions}/answers/${idSeeAnswer}`, status)
}