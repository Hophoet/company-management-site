import {combineReducers} from 'redux';

import { SET_USER } from './actions'


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
        default:
            return state;
    }
}

const reducers = combineReducers({
    auth
})

export default reducers;
