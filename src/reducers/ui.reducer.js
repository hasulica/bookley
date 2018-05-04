import moment from 'moment';
import { handleActions } from 'redux-actions';
import { SELECT_DATE } from '../actions/ui.actions'

const initialState = {
  currentDate: moment(new Date())
}

const reducer = {
    [SELECT_DATE]: (state, action) => ({
        ...state,
        ...action.payload,
    })
}

export default handleActions(reducer, initialState);
