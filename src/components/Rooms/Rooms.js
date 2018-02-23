import React, { Component } from 'react';
import RoomBox from '../RoomBox/RoomBox';
import image from '../../room.jpg';

class Room extends Component {
  render(props) {
    return(
      <div className="room">
        <RoomBox imageSrc={image} label="Sheep Room"/>
        <RoomBox imageSrc={image} label="Sheep Room" />
        <RoomBox imageSrc={image} label="Sheep Room" />
      </div>
    )
  }
}

export default Room;
