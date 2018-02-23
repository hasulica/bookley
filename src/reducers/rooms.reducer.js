import { RECEIVED_APPOINTMENT, DELETE_APPOINTMENT } from '../actions/rooms.actions'

const initialState = {
  rooms: [
    {
      name: 'Ayleysbury(mr1)',
      appointments: [],
      isActive: false,
      backgroundImage: 'aylesbury',
    },
    {
      name: 'Haywards(mr2)',
      appointments: [],
      isActive: false,
      backgroundImage: 'haywards',
    },
    {
      name: 'Sheep',
      appointments: [],
      isActive: false,
      backgroundImage: 'sheep',
    },
    {
      name: 'Kitchen',
      appointments: [],
      isActive: false,
      backgroundImage: 'kitchen',
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

    default:
      return {
        ...state,
      }
  }

}