import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../Brand.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="row">
          <form>
          <input type="radio" id="roomboxToday" name="test" value="today" className="RoomBox-tab" defaultChecked={true} />
            <label htmlFor="roomboxToday" className="RoomBox-tab-label col-xs-4">TODAY</label>
            <input type="radio" id="roomboxTomorrow" name="test" value="tomorrow" className="RoomBox-tab" />
            <label htmlFor="roomboxTomorrow" className="RoomBox-tab-label col-xs-4">TOMORROW</label>
            <input type="radio" id="roomboxPickDate" name="test" value="pickDate" className="RoomBox-tab" />
            <label htmlFor="roomboxPickDate" className="RoomBox-tab-label col-xs-4">PICK DATE</label>
          </form>
        </div>
      </header>
    )
  }
}

export default Header;