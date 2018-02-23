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
      appointments: [{
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2018, 1, 23),
    end: new Date(2018, 1, 23)
  },
  {
    id: 1,
    title: "Long Event",
    author: "Radu Asandei",
    desc: "This is a test events that is happening now",
    start: new Date(2018, 1, 23, 9, 0, 0),
    end: new Date(2018, 1, 23, 10, 0, 0)
  },
  {
    id: 1,
    title: "Long Event",
    author: "Radu Asandei",
    desc: "This is a test events that is happening now",
    start: new Date(2018, 1, 23, 12, 0, 0),
    end: new Date(2018, 1, 23, 12, 30, 0)
  },
  {
    id: 1,
    title: "Long Event",
    author: "Radu Asandei",
    desc: "This is a test events that is happening now",
    start: new Date(2018, 1, 23, 13, 0, 0),
    end: new Date(2018, 1, 23, 14, 0, 0)
  },
  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2018, 2, 13, 10, 0, 0),
    end: new Date(2018, 2, 13, 11, 0, 0)
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2018, 10, 6, 0, 0, 0),
    end: new Date(2018, 10, 13, 0, 0, 0)
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2018, 3, 9, 0, 0, 0),
    end: new Date(2018, 3, 9, 0, 0, 0)
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2018, 3, 11),
    end: new Date(2018, 3, 13),
    desc: "Big conference for important people"
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2018, 3, 12, 10, 30, 0, 0),
    end: new Date(2018, 3, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2018, 3, 12, 12, 0, 0, 0),
    end: new Date(2018, 3, 12, 13, 0, 0, 0),
    desc: "Power lunch"
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2018, 3, 12, 14, 0, 0, 0),
    end: new Date(2018, 3, 12, 15, 0, 0, 0)
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2018, 3, 12, 17, 0, 0, 0),
    end: new Date(2018, 3, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2018, 3, 12, 20, 0, 0, 0),
    end: new Date(2018, 3, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2019, 3, 13, 7, 0, 0),
    end: new Date(2018, 3, 13, 10, 30, 0)
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2018, 3, 17, 19, 30, 0),
    end: new Date(2018, 3, 18, 2, 0, 0)
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2018, 3, 20, 19, 30, 0),
    end: new Date(2018, 3, 22, 2, 0, 0)
  }],
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
        rooms: state.rooms.map(room => {
          console.log(room)
          console.log(action.payload)
          if (room.id === action.payload.roomId) {
            console.log('found one')
            room.appointments.push(action.payload.appointment)
          }
          return room;
        })
      };
      break
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
        ...state
      }

    default:
      return {
        ...state,
      }
  }

}