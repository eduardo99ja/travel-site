import { combineReducers } from 'redux'
import { travelListReducer } from './travelReducer'

export default combineReducers({
  travelList: travelListReducer,
})
