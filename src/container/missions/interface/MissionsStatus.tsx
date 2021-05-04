import { Status } from "./Status";

type Missions = {
    _id?: string;
    _user: string;
    description: string;
    lux: number;
    name: string;
    resources: number;
    secret_code: string;
}

type User = {
    _id?: string;
    email: string;
    name: string;
}

export default interface MissionsStatusInterface {
    _id?: string;
    title?: string;
    image?: string;
    text_msg?: string;
    audio?: string;
    video?: string;
    value?: number;
    location_lat?: string;
    location_lng?: string;
    created_at: string;
    imp: number;
    people: number;
    status: Status;
    _group?: any;
    _mission: Missions;
    _user: User;
}