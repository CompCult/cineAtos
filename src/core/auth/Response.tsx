export interface Response {
    can_edit: boolean;
    created_at: string;
    email: string;
    imp: number;
    institution: string;
    lux: number;
    name: string;
    people: number;
    request_limit: number;
    resources: number;
    sec_points: number;
    token: string;
    type: 'professor' | 'gestor' | 'estudante' | 'usuarioComum';
    _id: string;
}