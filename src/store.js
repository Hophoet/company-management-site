import { createStore } from 'redux'

const initialState = {
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'default':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store