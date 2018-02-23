import { combineReducers } from 'redux';
import calendar from './calendar.reducer';
import ui from './ui.reducer'
import rooms from './rooms.reducer'

export default combineReducers({
  ui,
  calendar,
  rooms,
});