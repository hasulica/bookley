import React, {Component} from 'react'
import logo from '../../room.jpg';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import events from '../../events';
import Modal from 'react-modal';

BigCalendar.momentLocalizer(moment);

  function Event({ event }) {
    return <span>
        <div className="event-title">{event.title}</div>
        <div className="event-author">{event.author}</div>
      </span>;
  }

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      slotInfo: {}
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(slotInfo) {
    this.setState({ modalIsOpen: true, slotInfo: slotInfo});
    console.log(this.state.slotInfo);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  customDayPropGetter = date => {
    return {
      className: "day-style"
    };
  };

  customEventPropGetter = () => {
    return { className: "event-style" };
  };

  customSlotPropGetter = () => {
    return { className: "slot-style" };
  };


  render() {

    const { roomLabel, currentDate } = this.props
    const { slotInfo } = this.state


    return <div className="RoomBox">
          <BigCalendar events={events} startAccessor="start" endAccessor="end" selectable={true} defaultView="day" onSelectSlot={(slotInfo) => this.openModal(slotInfo)} views={["day"]} min={new Date(2018, 2, 23, 8, 0, 0)} max={new Date(2018, 2, 23, 18, 0, 0)} defaultDate={currentDate} dayPropGetter={this.customDayPropGetter} eventPropGetter={this.customEventPropGetter} slotPropGetter={this.customSlotPropGetter} components={{ event: Event }} />
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Example Modal">
          <button onClick={this.closeModal}>X</button>
          <span>{roomLabel + " Room Booking"}</span>
          <span>{moment(new Date(slotInfo.start)).format("Do MMM h:mm") + " to " + moment(new Date(slotInfo.start)).format("Do MMM h:mm")}</span>
          <form>
            <span>Title</span>
            <input />
            <span>Description</span>
            <input />
            <button>Cancel</button>
            <button>Confirm</button>
          </form>
        </Modal>
      </div>;
  }
}


export default Calendar;