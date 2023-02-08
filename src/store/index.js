import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import { authReducer } from '../reducer';

const composeEnhancers = 
    (typeof window !== 'undefined' 
    && window.__REDUX_DEVTOOLS_EXTENSION_SCOPE_COMPOSE__) || compose

const reducers = combineReducers({
    auth: authReducer,
});

export const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// ahora toca conectar todo en App