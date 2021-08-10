import { combineReducers } from 'redux';
import users from './userList/usersListReducer'

const rootReducer = combineReducers({
    users,

})
export default rootReducer
