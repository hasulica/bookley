import React, { Component } from 'react';
import RoomBox from './components/RoomBox/RoomBox';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import { connect } from 'react-redux';
import { receivedAppointment } from './actions/actions';
import { makeRoomActive }  from './actions/rooms.actions';
import { selectDate }  from './actions/ui.actions';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  handleClick = (id) => {
    this.props.makeRoomActive(id);
  }
  renderRooms = () => {
    const { rooms: { rooms }, ui: { currentDate } } = this.props;
    console.log(this.props)
    return rooms.map((room, index) => (
      <RoomBox
        currentDate={currentDate}
        onClick={this.handleClick}
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

const mapStateToProps = ({ ui, rooms }) => { //grabs from the store and makes available as props
  return {
    ui,
    rooms,
  }
}

const mapDispatchToProps = (dispatch) => ({
  receivedAppointment: (data) => dispatch(receivedAppointment(data)),
  makeRoomActive: (id) => dispatch(makeRoomActive(id)),
  handleDateSelection: (date) => dispatch(selectDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
