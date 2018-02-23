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

class RoomBox extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      slotInfo: {}
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(slotInfo) {
    this.setState({ modalIsOpen: true, slotInfo: slotInfo});
    console.log(this.state.slotInfo);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
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
    return <div className="RoomBox">
        <div className="RoomBox-image-container col-xs-12, col-md-6 col-lg-4">
          <img src={this.props.imageSrc} className="RoomBox-image" />
          <p className="RoomBox-image-label">{this.props.label}</p>
          <BigCalendar events={events} startAccessor="start" endAccessor="end" selectable={true} defaultView="day" onSelectSlot={(slotInfo) => this.openModal(slotInfo)} views={["day"]} min={new Date(2018, 2, 23, 8, 0, 0)} max={new Date(2018, 2, 23, 18, 0, 0)} defaultDate={new Date()} dayPropGetter={this.customDayPropGetter} eventPropGetter={this.customEventPropGetter} slotPropGetter={this.customSlotPropGetter} components={{ event: Event }} />
        </div>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Example Modal">
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>{this.state.slotInfo.action}</div>
          <form>
            <input />
          </form>
        </Modal>
      </div>;
  }
}


export default RoomBox;