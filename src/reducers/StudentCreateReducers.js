import { STUDENT_CHANGE, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../constants/types';

const INITIAL_STATE = {
    studentName: '',
    surname: '',
    studentNumber: '',
    sube: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STUDENT_CHANGE:
            return{ ...state, [action.payload.props]: action.payload.value};
        case CREATE_REQUEST:
            return{ ...state, loading: true };
        case CREATE_REQUEST_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};