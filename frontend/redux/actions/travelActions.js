import clienteAxios from '../../axios/client'
import * as types from '../types/travelTypes'

export const listTravels = () => async dispatch => {
  try {
    dispatch({ type: types.TRAVEL_LIST_REQUEST })

    const { data } = await clienteAxios.get('/api/v1/travels')

    dispatch({
      type: types.TRAVEL_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.TRAVEL_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
export const listTravelDetails = id => async dispatch => {
  try {
    dispatch({ type: types.TRAVEL_DETAILS_REQUEST })

    const { data } = await clienteAxios.get(`/api/v1/travels/${id}`)

    dispatch({
      type: types.TRAVEL_DETAILS_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: types.TRAVEL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
