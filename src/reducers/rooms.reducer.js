import { handleActions } from 'redux-actions';
import roomData from '../data/rooms';
import {
  RECEIVED_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_ROOM
} from '../actions/rooms.actions'

const initialState = { rooms: roomData };

const reducer = {
    [RECEIVED_APPOINTMENT]: (state, action) => ({
        ...state,
        rooms: state.rooms.map(room => {
            if (room.id === action.payload.roomId) {
                room.appointments.push(action.payload.appointment)
            }
            return room;
        })
    }),
    [DELETE_APPOINTMENT]: (state, action) => ({
        ...state,
        ...action.payload,
    }),
    [UPDATE_ROOM]: (state, action) => {
        const { rooms } = state;
        return {
            ...state,
            rooms: rooms.map(room => {
                if (room.id === action.payload) {
                  if (room.isActive) {
                    room.isActive = false;
                  } else {
                    room.isActive = true;
                  }
                } else {
                  room.isActive = false;
                }
                return room
              })
        }
    }
}
export default handleActions(reducer, initialState);
