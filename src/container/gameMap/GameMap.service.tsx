import { http } from "../../core/http/Http.interceptor";

const URL: string = 'missions/georeferencedanswers';

export const getGameMap = () => {
    return http.get<Array<any>>(URL)
} 