import axios from 'axios'
import baseURL from '../../axios/client'
import * as types from '../types/travelTypes'

export const listTravels = () => async dispatch => {
  try {
    dispatch({ type: types.TRAVEL_LIST_REQUEST })

    const { data } = await axios.get(`${baseURL}/api/v1/travels`)

    dispatch({
      type: types.TRAVEL_LIST_SUCCESS,
      payload: data.data,
    })
  } catch (error) {
    dispatch({
      type: types.TRAVEL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
