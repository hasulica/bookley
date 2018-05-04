import React, { Component } from "react";
import backImg from "../../back.png";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "./../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <div className="event-title">{event.title}</div>
      <div className="event-author">{event.desc}</div>
    </span>
  );
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
    this.setState({ modalIsOpen: true, slotInfo: slotInfo });
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

  handleSubmission = e => {
    e.preventDefault();
    const appointment = {
      title: this.state.title,
      desc: this.state.description,
      start: new Date(this.state.slotInfo.start),
      end: new Date(this.state.slotInfo.end)
    };
    this.props.handleNewAppointment(appointment);
    this.closeModal();
  };

  handleInputChange = target => e => {
    e.preventDefault();
    this.setState({ [target]: e.target.value });
  };

  render() {
    const { roomLabel, currentDate, appointments } = this.props;
    const { slotInfo } = this.state;

    return (
      <div className="RoomBox-Calendar">
        <BigCalendar
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          selectable={true}
          defaultView="day"
          onSelectSlot={slotInfo => this.openModal(slotInfo)}
          views={["day"]}
          min={new Date(2018, 2, 23, 8, 0, 0)}
          max={new Date(2018, 2, 23, 18, 0, 0)}
          dafaultDate={new Date()}
          date={currentDate}
          dayPropGetter={this.customDayPropGetter}
          eventPropGetter={this.customEventPropGetter}
          slotPropGetter={this.customSlotPropGetter}
          components={{ event: Event }}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <img
            className="booking-back-icon"
            src={backImg}
            alt={roomLabel}
            onClick={this.closeModal}
          />
          <h4 className="booking-details-name">
            {roomLabel + " Room Booking"}
          </h4>
          <p className="booking-details-time">
            {moment(new Date(slotInfo.start)).format("Do MMM h:mm") + " to " + moment(new Date(slotInfo.start)).format("Do MMM h:mm")}
          </p>
          <form>
            <p class="booking-details-text">Name</p>
            <input
              type="text"
              placeholder="Your name"
              onChange={this.handleInputChange("title")}
            />
            <p class="booking-details-text">Meeting Description</p>
            <input
              type="text"
              placeholder="Short description..."
              onChange={this.handleInputChange("description")}
            />
            <button
              className="booking-confirm-button"
              onClick={this.handleSubmission}
            >
              Schedule Meeting
            </button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
