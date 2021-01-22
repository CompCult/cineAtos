import { InterfacePagination } from '../interface/UserPagination';
import { INITIAL_PAGINATION } from '../../../component/table/component/pagination/utils/Pagination';
import User from '../interface/User';

export const INITIAL_VALUES: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    institution: '',
    can_edit: false,
}

export const INITIAL_VALUES_PAGINATION: InterfacePagination = {
    //name: '',
    // email: '',  
    //type: '',
    //institution: '', 
    limit: INITIAL_PAGINATION.limit,
    page: INITIAL_PAGINATION.page,
    //sort: INITIAL_PAGINATION.sort,
    //asc: INITIAL_PAGINATION.asc
}