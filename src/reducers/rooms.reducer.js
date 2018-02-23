import { RECEIVED_APPTS } from '../actions/rooms.actions'

const initialState = [
  {
    name: 'Ayleysbury(mr1)',
    appts: [],
    isActive: false,
  },
{
    name: 'Haywards(mr2)',
    appts: [],
    isActive: false,
  },
{
    name: 'Sheep',
    appts: [],
    isActive: false,
  },
]



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