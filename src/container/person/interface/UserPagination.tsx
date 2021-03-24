import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    name?: string;
    email?: string;
    type?: string;
    institution?: string;
    sec_points?: number | string;
}