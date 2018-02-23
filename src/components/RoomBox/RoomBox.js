import React, {Component} from 'react'
import logo from '../../room.jpg';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import events from '../../events';

BigCalendar.momentLocalizer(moment);

  function Event({ event }) {
    return <span>
        <div className="event-title">{event.title}</div>
        <div className="event-author">{event.author}</div>
      </span>;
  }

class RoomBox extends Component {

  customDayPropGetter = date => {
    return {
      className: "day-style"
    };
  };

  customEventPropGetter = () => {
    return { className: "event-style" };
  };

  customSlotPropGetter = () => {
    return { className: "slot-style"};
  };

  render() {
    return (
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
        <BigCalendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          defaultView="day"
          onSelectSlot={slotInfo => console.log(slotInfo)}
          views={["day"]}
          min={new Date(2018, 2, 23, 8, 0, 0)}
          max={new Date(2018, 2, 23, 18, 0, 0)}
          defaultDate={new Date()}
          dayPropGetter={this.customDayPropGetter}
          eventPropGetter={this.customEventPropGetter}
          slotPropGetter={this.customSlotPropGetter}
          components={{
          event: Event
          }}
        />
      </div>
    );
  }
}

export default RoomBox;
