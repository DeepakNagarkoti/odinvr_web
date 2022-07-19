import { combineReducers } from 'redux'
import appData from './appData'
import role from './role'

const rootReducer = combineReducers({
    appData,
    role
})

export default rootReducer