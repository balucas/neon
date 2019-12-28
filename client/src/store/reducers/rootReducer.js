import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    register: registerReducer
})

export default rootReducer;