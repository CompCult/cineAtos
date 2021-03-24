import { InterfacePagination } from '../interface/QuizzesPagination';
import { INITIAL_PAGINATION } from '../../../component/table/component/pagination/utils/Pagination';
import Quizzes from '../interface/Quizzes';

export const INITIAL_VALUES: Quizzes = {
    title: '',
    description: '',
    lux: 0,
    resources: 0,
    start_time: new Date(),
    end_time: new Date(),
    is_public: true,
    single_answer: true,
    alternative_a: '',
    alternative_b: '',
    alternative_c: '',
    alternative_d: '',
    alternative_e: '',
    correct_answer: ''
}

export const INITIAL_VALUES_PAGINATION: InterfacePagination = {
    //_user: '',
    //title: '',
    //description: '',
    // secret_code: '',
    limit: INITIAL_PAGINATION.limit,
    page: INITIAL_PAGINATION.page,
    sort: INITIAL_PAGINATION.sort,
    order: INITIAL_PAGINATION.order
}