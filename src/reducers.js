import { combineReducers } from 'redux'

const countAge = (state=0 ,action) => {
    switch (action.type) {
      case 'UP':
        return state + 1
      case 'DOWN':
        return state - 1
      default:
        return state
    }
}

const reducers = combineReducers({
    countAge,
})

export default reducers