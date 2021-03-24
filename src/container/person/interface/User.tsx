export default interface UserInterface {
    _id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    type: '' | 'professor' | 'gestor' | 'estudante' | 'usuarioComum';
    institution: string;
    can_edit: boolean | string;
    created_at?: string;
    imp?: number;
    lux?: number;
    people?: number;
    request_limit?: number;
    resources?: number;
    sec_points?: number | string;
} 