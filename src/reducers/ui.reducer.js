import moment from 'moment';
import { SELECT_DATE } from '../actions/ui.actions'

const initialState = {
  currentDate: moment(new Date())
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE:
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