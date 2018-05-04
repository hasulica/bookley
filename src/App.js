import React, { Component } from 'react';
import RoomBox from './components/RoomBox/RoomBox';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { makeRoomActive, receivedAppointment }  from './actions/rooms.actions';
import { selectDate }  from './actions/ui.actions';
import './App.css';


class App extends Component {
  handleClick = (id) => {
    this.props.makeRoomActive(id);
  }

  renderRooms = () => {
    const { rooms: { rooms }, ui: { currentDate } } = this.props;
    return rooms.map((room, index) => (
      <RoomBox
        currentDate={currentDate}
        onClick={this.handleClick}
        onDateChange={this.props.handleReceivedAppointment}
        key={index}
        {...room}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <Header onDateSelection={this.props.handleDateSelection}/>
        {this.renderRooms()}
      </div>
    );
  }
}

const mapStateToProps = ({ ui, rooms }) => ({
    ui,
    rooms,
});

const mapDispatchToProps = (dispatch) => ({
  receivedAppointment: (data) => dispatch(receivedAppointment(data)),
  makeRoomActive: (id) => dispatch(makeRoomActive(id)),
  handleDateSelection: (date) => dispatch(selectDate(date)),
  handleReceivedAppointment: (roomId, dateObj) => dispatch(receivedAppointment(roomId, dateObj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
