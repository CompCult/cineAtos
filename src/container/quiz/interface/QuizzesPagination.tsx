import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    _user?: string;
    title?: string;
    description?: string;
    secret_code?: string;
}