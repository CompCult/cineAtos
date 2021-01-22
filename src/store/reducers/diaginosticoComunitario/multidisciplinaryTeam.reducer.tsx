import { actionTypes } from '../../constant/diaginosticoComunitario/multidisciplinaryTeamType.action';

interface Action {
    idUnidade: number;
    type: string;
}

const INITIAL_VALUES = {
    idUnidade: 0
}

const multidisciplinaryTeam = (state = INITIAL_VALUES, action: Action) => {
    switch (action.type) {
        case actionTypes.SET_ID_UNITY:
            return { ...state, idUnidade: action.idUnidade };
        default:
            return state;
    }
}

export { multidisciplinaryTeam };