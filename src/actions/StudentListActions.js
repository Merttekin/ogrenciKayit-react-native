import firebase from 'firebase';
import { STUDENT_CHANGE, CREATE_REQUEST, CREATE_REQUEST_SUCCESS } from '../constants/types';

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
        })
    }
};