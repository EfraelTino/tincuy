import {  firebase, googleAuthProvider,loginEmail } from "../firebase/firebase-config";
import { types } from "../types"

export const createUser = (  email, password) =>({
    types: types.createuser,
    payload: { email, password},
})
export const logine = (uid, email, password) =>({
    types: types.loginEmail,
    payload: {uid, email, password},
})
export const login = (uid, displayName) =>  ({
    type:types.login,
    payload:{uid, displayName},
})

export const logout = () =>({
    type:types.logout,
})

export const startGoogleAuth = () =>{
    return async (dispatch) =>{
        firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            console.log(user);
            dispatch(login(user.uid, user.displayName))  
        })
        .catch((e) =>{
            console.log(e)
        })
    };
};

export const startEmail=() =>{
    return async (dispatch) =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(loginEmail)
        .then (({user}) =>{
            console.log(user);
            dispatch(logine(user.uid, user.email, user.password))
        })
        .catch ((e) =>{
            console.log(e)
        })
    }
}


export const startGoogleLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
    };
  };