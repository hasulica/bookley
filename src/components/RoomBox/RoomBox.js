import React, {Component} from 'react'
import logo from '../../room.jpg';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class RoomBox extends Component {
  render() {

const events = [
        {
          id: 0,
          title: "All Day Event very long title",
          allDay: true,
          start: new Date(2018, 2, 21),
          end: new Date(2018, 2, 21)
        }, {
          id: 1,
          title: "Long Event",
          start: new Date(2015, 3, 7),
          end: new Date(2015, 3, 10)
        }, {
          id: 2,
          title: "DTS STARTS",
          start: new Date(2016, 2, 13, 0, 0, 0),
          end: new Date(2016, 2, 20, 0, 0, 0)
        }, {
          id: 3,
          title: "DTS ENDS",
          start: new Date(2016, 10, 6, 0, 0, 0),
          end: new Date(2016, 10, 13, 0, 0, 0)
        }, {
          id: 4,
          title: "Some Event",
          start: new Date(2015, 3, 9, 0, 0, 0),
          end: new Date(2015, 3, 9, 0, 0, 0)
        }, {
          id: 5,
          title: "Conference",
          start: new Date(2015, 3, 11),
          end: new Date(2015, 3, 13),
          desc: "Big conference for important people"
        }, {
          id: 6,
          title: "Meeting",
          start: new Date(2015, 3, 12, 10, 30, 0, 0),
          end: new Date(2015, 3, 12, 12, 30, 0, 0),
          desc: "Pre-meeting meeting, to prepare for the meeting"
        }, {
          id: 7,
          title: "Lunch",
          start: new Date(2015, 3, 12, 12, 0, 0, 0),
          end: new Date(2015, 3, 12, 13, 0, 0, 0),
          desc: "Power lunch"
        }, {
          id: 8,
          title: "Meeting",
          start: new Date(2015, 3, 12, 14, 0, 0, 0),
          end: new Date(2015, 3, 12, 15, 0, 0, 0)
        }, {
          id: 9,
          title: "Happy Hour",
          start: new Date(2015, 3, 12, 17, 0, 0, 0),
          end: new Date(2015, 3, 12, 17, 30, 0, 0),
          desc: "Most important meal of the day"
        }, {
          id: 10,
          title: "Dinner",
          start: new Date(2015, 3, 12, 20, 0, 0, 0),
          end: new Date(2015, 3, 12, 21, 0, 0, 0)
        }, {
          id: 11,
          title: "Birthday Party",
          start: new Date(2015, 3, 13, 7, 0, 0),
          end: new Date(2015, 3, 13, 10, 30, 0)
        }, {
          id: 12,
          title: "Late Night Event",
          start: new Date(2015, 3, 17, 19, 30, 0),
          end: new Date(2015, 3, 18, 2, 0, 0)
        }, {
          id: 13,
          title: "Multi-day Event",
          start: new Date(2015, 3, 20, 19, 30, 0),
          end: new Date(2015, 3, 22, 2, 0, 0)
        }
      ];

    return(
      <div className="RoomBox">
        <div className="row">
          <input type="radio" id="roomboxToday" value="today" className="RoomBox-tab" defaultChecked={true} />
          <label htmlFor="roomboxToday" className="RoomBox-tab-label col-xs-4">TODAY</label>
          <input type="radio" id="roomboxTomorrow" value="tomorrow" className="RoomBox-tab" />
          <label htmlFor="roomboxTomorrow" className="RoomBox-tab-label col-xs-4">TOMORROW</label>
          <input type="radio" id="roomboxPickDate" value="pickDate" className="RoomBox-tab" />
          <label htmlFor="roomboxPickDate" className="RoomBox-tab-label col-xs-4">PICK DATE</label>
        </div>
        <div className="row">
          <div className="RoomBox-image-container col-xs-12">
            <img src={logo} className="RoomBox-image" />
            <p className="RoomBox-image-label">Sheep Room</p>
          </div>

          <div className="RoomBox-image-container col-xs-12">
            <img src={logo} className="RoomBox-image" />
            <p className="RoomBox-image-label">Aylesbury (nee MR1)</p>
          </div>

          <div className="RoomBox-image-container col-xs-12">
            <img src={logo} className="RoomBox-image" />
            <p className="RoomBox-image-label">Hayward's (nee MR2)</p>
          </div>
        </div>
        <BigCalendar events = {
          events
        }
        startAccessor = "startDate" endAccessor = "endDate" selectable = {
          true
        }
        defaultView = "day" onSelectSlot = {
          slotInfo => console.log(slotInfo)
        }
        views = {
          ["day"]
        }
        min = {
          new Date(2018, 2, 21, 8, 0, 0)
        }
        max = {
          new Date(2018, 2, 21, 18, 0, 0)
        }
        defaultDate = {
          new Date()
        } />
      </div>
  )
}