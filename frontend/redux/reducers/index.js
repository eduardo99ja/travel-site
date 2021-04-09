import { combineReducers } from 'redux'
import { travelListReducer, travelDetailsReducer } from './travelReducer'

export default combineReducers({
  travelList: travelListReducer,
  travelDetails: travelDetailsReducer,
})
