import {  firebase, googleAuthProvider,loginEmail } from "../firebase/firebase-config";
import { types } from "../types"
import { addUserToFirestore } from './userActions';

export const createUser = (  email, password) =>({
    types: types.createuser,
    payload: { email, password},
})

export const login = (uid, displayName) =>  ({
    type:types.login,
    payload:{uid, displayName},
})

export const logout = () =>({
    type:types.logout,
})

export const startGoogleLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
    };
  };
  