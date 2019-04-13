import { combineReducers } from 'redux';
import authenticationReducers from './authenticationReducers';

export default combineReducers({
    authenticationResponse: authenticationReducers
});