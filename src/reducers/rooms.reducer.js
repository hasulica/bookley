import { RECEIVED_APPTS } from '../actions/calendar.actions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_APPTS:
      return {
        ...state,
        ...action.payload,
      }
      default:
      return {
        ...state,
      }
  }

}