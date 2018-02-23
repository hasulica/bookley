import { RECEIVED_APPOINTMENT, DELETE_APPOINTMENT } from '../actions/rooms.actions'

const initialState = {
  rooms: [
    {
      label: 'Ayleysbury(mr1)',
      appointments: [],
      isActive: false,
      backgroundImage: 'ayleysbury.jpg',
    },
    {
      label: 'Haywards(mr2)',
      appointments: [],
      isActive: false,
      backgroundImage: 'haywards.jpg',
    },
    {
      label: 'Sheep',
      appointments: [],
      isActive: false,
      backgroundImage: 'sheep',
    },
    {
      label: 'Kitchen',
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