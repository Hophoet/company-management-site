import {combineReducers} from 'redux';

import { SET_USER, SET_IS_ADMIN, SET_AUTH_TOKEN } from './actions'


const intialState = {
    user:{
        name:'test user'
    }
}

const auth = (state=intialState, action) => {
    switch(action.type){

        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_IS_ADMIN:
            return {
                ...state,
                isAdmin: action.isAdmin
            }
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.authToken
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    auth
})

export default reducers;
