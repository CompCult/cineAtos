export default interface MiniGamesInterface {
    _id?: string;
    title: string;
    images?: Array<any>;
    description: string;
    secret_code?: string;
    lux: number;
    resources: number;
    is_public: boolean | string;
}