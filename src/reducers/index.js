import { combineReducers } from 'redux';
import authenticationReducers from './authenticationReducers';
import StudentsListReducers from './StudentsListReducers';

export default combineReducers({
    authenticationResponse: authenticationReducers,
    StudentsListResponse: StudentsListReducers
});