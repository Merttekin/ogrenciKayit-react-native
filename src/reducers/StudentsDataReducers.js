import { STUDENT_LIST_DATA_SUCCESS } from '../constants/types';

const INITIAL_STATE = {
    
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STUDENT_LIST_DATA_SUCCESS:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};