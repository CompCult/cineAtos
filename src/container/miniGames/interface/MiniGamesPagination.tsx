import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    title: string;
    description: string;
    secret_code: string;
    lux: number;
    resources: number;
}