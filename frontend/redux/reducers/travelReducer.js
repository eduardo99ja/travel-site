import * as types from '../types/travelTypes'

export const travelListReducer = (state = { travels: [] }, action) => {
  switch (action.type) {
    case types.TRAVEL_LIST_REQUEST:
      return { loading: true, travels: [] }
    case types.TRAVEL_LIST_SUCCESS:
      return {
        loading: false,
        travels: action.payload.data,
        pagination: action.payload.pagination,
      }
    case types.TRAVEL_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
