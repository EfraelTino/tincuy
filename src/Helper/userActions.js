import {  db } from "../firebase/firebase-config";
export const addUserToFirestore = (user) => {
    return async (dispatch) => {
        try {
            await db.collection('users').add(user);
            dispatch({ type: 'ADD_USER_SUCCESS' });
        } catch (error) {
            dispatch({ type: 'ADD_USER_ERROR', error });
        }
    };
};