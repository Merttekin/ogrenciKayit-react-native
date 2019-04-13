import { STUDENT_CHANGE } from '../constants/types';

const INITIAL_STATE = {
    studentName: '',
    surname: '',
    studentNumber: '',
    sube: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STUDENT_CHANGE:
            return{ ...state, [action.payload.props]: action.payload.value};
        default:
            return state;
    }
};