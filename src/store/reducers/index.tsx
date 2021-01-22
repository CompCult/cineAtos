import { combineReducers } from 'redux';

import { multidisciplinaryTeam } from './diaginosticoComunitario/multidisciplinaryTeam.reducer';

const reducers = combineReducers({
    multidisciplinaryTeam,
})

export { reducers };