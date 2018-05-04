import React from 'react';
import moment from 'moment';
import logo from '../../Brand.png';

export default (props) => {
  const handleDateSelection = (e) => {
    // e.preventDefault;
    const value = e.target.value;
    if (value === 'today') {
      const today = moment(new Date());
      props.onDateSelection(today)
    } else if (value === 'tomorrow') {
      const tomorrow  = moment(new Date()).add(1,'days');
      props.onDateSelection(tomorrow)
    }
  }

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="row">
        <form>
          <input onClick={handleDateSelection} type="radio" id="roomboxToday" name="test" value="today" className="RoomBox-tab" defaultChecked={true} />
          <label htmlFor="roomboxToday" className="RoomBox-tab-label col-xs-4">TODAY</label>
          <input onClick={handleDateSelection} type="radio" id="roomboxTomorrow" name="test" value="tomorrow" className="RoomBox-tab" />
          <label htmlFor="roomboxTomorrow" className="RoomBox-tab-label col-xs-4">TOMORROW</label>
          <input type="radio" id="roomboxPickDate" name="test" value="pickDate" className="RoomBox-tab" />
          <label htmlFor="roomboxPickDate" className="RoomBox-tab-label col-xs-4">PICK DATE</label>
        </form>
      </div>
    </header>
  )
}
