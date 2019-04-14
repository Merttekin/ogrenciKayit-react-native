import { combineReducers } from 'redux';
import authenticationReducers from './authenticationReducers';
import StudentsListReducers from './StudentCreateReducers';
import StudentsDataReducers from './StudentsDataReducers';

export default combineReducers({
    authenticationResponse: authenticationReducers,
    StudentsListResponse: StudentsListReducers,
    studentDataResponse: StudentsDataReducers
});