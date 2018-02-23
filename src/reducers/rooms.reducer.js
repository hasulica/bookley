import {
  RECEIVED_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_ROOM
} from '../actions/rooms.actions'

const initialState = {
  rooms: [
    {
      id: 'ayleysbury',
      label: 'Ayleysbury(mr1)',
      appointments: [],
      isActive: false,
      backgroundImage: 'ayleysbury.jpg',
    },
    {
      id: 'haywards',
      label: 'Haywards(mr2)',
      appointments: [],
      isActive: false,
      backgroundImage: 'haywards.jpg',
    },
    {
      id: 'sheep',
      label: 'Sheep',
      appointments: [],
      isActive: false,
      backgroundImage: 'sheep.jpg',
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      appointments: [],
      isActive: false,
      backgroundImage: 'kitchen.jpg',
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_APPOINTMENT:
    
      return {
        ...state,
        ...action.payload,
      }
    case DELETE_APPOINTMENT:
      return {
        ...state,
        ...action.payload,
      }
    case UPDATE_ROOM:
    const { rooms } = state;
      rooms.map(room => {
        if (room.id === action.payload) {
          if (room.isActive) {
            room.isActive = false;
          } else {
            room.isActive = true;
          }
        } else {
          room.isActive = false;
        }
      })
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