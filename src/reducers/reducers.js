import { combineReducers } from 'redux';
import ui from './ui.reducer'
import rooms from './rooms.reducer'

export default combineReducers({
  ui,
  rooms,
});
