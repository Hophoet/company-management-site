import {combineReducers} from 'redux';

import { SET_USER, SET_IS_ADMIN } from './actions'


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
        default:
            return state;
    }
}

const reducers = combineReducers({
    auth
})

export default reducers;
