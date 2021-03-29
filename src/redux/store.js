import { createStore } from 'redux';

const store = createStore(()=>  ({
    user:{
        name:'test user'
    }
}))

export default store;