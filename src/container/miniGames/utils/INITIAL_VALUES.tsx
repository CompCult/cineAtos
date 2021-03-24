import { InterfacePagination } from '../interface/MiniGamesPagination';
import { INITIAL_PAGINATION } from '../../../component/table/component/pagination/utils/Pagination';
import MiniGames from '../interface/MiniGames';

export const INITIAL_VALUES: MiniGames = {
    title: '',
    description: '',
    lux: 0,
    resources: 0,
    images: [],
    is_public: true,
}

export const INITIAL_VALUES_PAGINATION: InterfacePagination = {
    title: '',
    description: '',
    secret_code: '',
    lux: 0,
    resources: 0,
    limit: INITIAL_PAGINATION.limit,
    page: INITIAL_PAGINATION.page,
    sort: INITIAL_PAGINATION.sort,
    order: INITIAL_PAGINATION.order
}