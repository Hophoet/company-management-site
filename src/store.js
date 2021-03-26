import { createStore } from 'redux'

const initialState = {
  user:null
}

const changeState = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_USER':
          return {
              ...state,
              user: action.user
          }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store