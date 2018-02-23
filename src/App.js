import React, { Component } from 'react';
import './App.css';
import RoomBox from './components/RoomBox/RoomBox';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import { connect } from 'react-redux';
import { receivedAppts, } from './actions/actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  renderRooms = () => {
    const { rooms } = this.props.rooms;
    console.log(rooms)
    return rooms.map((room, index) => (
      <RoomBox key={index} {...room} />
    ));
  }
  render() {
    const { ui } =  this.props;

    return (
      <div className="App">
        <Header />
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
  receivedAppts: (data) => dispatch(receivedAppts(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
