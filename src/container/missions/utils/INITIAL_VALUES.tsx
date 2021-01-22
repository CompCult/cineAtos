import { InterfacePagination } from '../interface/MissionsPagination';
import { INITIAL_PAGINATION } from '../../../component/table/component/pagination/utils/Pagination';
import Missions from '../interface/Missions';

export const INITIAL_VALUES: Missions = {
    name: '',
    description: '',
    end_message: '',
    lux: 0,
    resources: 0,
    start_time: new Date(),
    end_time: new Date(),
    is_public: true,
    is_grupal: false,
    single_answer: true,
    has_image: false,
    has_video: false,
    has_text: false,
    has_audio: false,
    has_geolocation: false,
    isEntrepreneurial: false,
}

export const INITIAL_VALUES_PAGINATION: InterfacePagination = {
    //_user: '',
    //name: '',
    //description: '',
    //end_message: '',
    limit: INITIAL_PAGINATION.limit,
    page: INITIAL_PAGINATION.page,
    //sort: INITIAL_PAGINATION.sort,
    //asc: INITIAL_PAGINATION.asc
}