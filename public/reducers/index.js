import { combineReducers } from 'redux'
import BreedsReducer from './reducerBreed'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  breedState : BreedsReducer,
  form : formReducer
})

export default rootReducer