import React, {Component} from 'react'
import logo from '../../room.jpg';

class RoomBox extends Component {
  render() {
    return(
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
      </div>
    )
  }
}

export default RoomBox;