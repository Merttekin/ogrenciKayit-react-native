import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    STUDENT_CHANGE, 
    CREATE_REQUEST, 
    CREATE_REQUEST_SUCCESS,
    STUDENT_LIST_DATA_SUCCESS
} from '../constants/types';

export const studentChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGE,
            payload: { props, value }
        })
    }
};

export const studentCreate = ({ studentName, surname, studentNumber, sube }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .push({ studentName, surname, studentNumber, sube })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();
        })
    }
};

export const studentsListData = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
        .on('value', snapshot => {
            dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val() });
        })
    }
};