import { types } from "../types"
const initialState = {
    uid: null,
    displayName: null,
    email:null,
    password:null,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                email: action.payload.email,
                password: action.payload.password,
            }
        case types.register:
            return {
                uid: action.payload.uid,
                displayName:action.payload.displayName,
                email: action.payload.email,
                password: action.payload.password,
            }
        case types.loginEmail:
        return {
            uid: action.payload.uid,
            email:action.payload.email,
            password:action.payload.password,
        }
        case types.logout:
            return initialState;


        default: return state;
    }
} 