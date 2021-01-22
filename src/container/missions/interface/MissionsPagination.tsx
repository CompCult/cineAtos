import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    _user?: string;
    name?: string;
    description?: string;
    end_message?: string;
}