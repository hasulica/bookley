import React, {Component} from 'react'
import logo from '../../room.jpg';

class RoomBox extends Component {
  render() {
    return(
      <div className="RoomBox-image-container col-xs-12">
        <img src={logo} className="RoomBox-image" />
        <p className="RoomBox-image-label">Sheep Room</p>
      </div>
    )
  } 
}

export default RoomBox;