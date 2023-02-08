import {  firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types"
import { addUserToFirestore } from '../Helper/userActions';

export const createUser = (  email, password) =>({
    types: types.createuser,
    payload: { email, password},
})

export const login = (uid, displayName) =>  ({
    type:types.login,
    payload:{uid, displayName},
})


export const startGoogleAuth = () => {
    return async (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            })
            .catch((e) => {
                console.log(e)
            })
    };
};

export const logout = () =>({
    type:types.logout,
})

export const startGoogleLogout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
    };
  };
  
  export const mapDispatchToProps = (dispatch) => ({
    addUserToFirestore: (user) => dispatch(addUserToFirestore(user)),
  });