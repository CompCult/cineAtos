import { actionTypes } from '../../constant/diaginosticoComunitario/multidisciplinaryTeamType.action';

export const action = {
    setIdUnidade: (id: number) => ({
        type: actionTypes.SET_ID_UNITY,
        idUnidade: id
    })
}