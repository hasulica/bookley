import React, { Component } from 'react';
import './App.css';
import RoomBox from './components/RoomBox/RoomBox';
import Header from './components/Header/Header';
import Rooms from './components/Rooms/Rooms';
import Booking from './components/Booking/Booking';
import { connect } from 'react-redux';
import { receivedAppts, } from './actions/actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    const { ui } =  this.props;

    return (
      <div className="App">
        <Header />
        <RoomBox />
        <Link to={`/booking`}>Go Booking</Link>
        <Router>
          <div>
            <Route exact path="/" component={Rooms} />
            <Route exact path="/booking" component={Booking} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ ui, calendar }) => { //grabs from the store and makes available as props
  return {
    ui,
    calendar,
  }
}

const mapDispatchToProps = (dispatch) => ({
  receivedAppts: (data) => dispatch(receivedAppts(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
