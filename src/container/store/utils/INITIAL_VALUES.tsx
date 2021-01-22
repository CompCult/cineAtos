import { InterfacePagination } from '../interface/StorePagination';
import { INITIAL_PAGINATION } from '../../../component/table/component/pagination/utils/Pagination';
import Item from '../interface/Item';

export const INITIAL_VALUES: Item = {
    title: '',
    description: '',
    quantity: 0,
    value: 0,
    start_time: '',
    end_time: '',
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