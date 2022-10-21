import { combineReducers } from 'redux' //npm i redux

import empReducer from './EmpReducer'
import usersReducer from './usersReducer'
import studentsReducer from './studentsReducer';



var rootReducer = combineReducers({
    empReducer,usersReducer,studentsReducer
});

export default rootReducer;