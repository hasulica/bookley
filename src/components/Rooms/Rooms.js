import React, { Component } from 'react';

class Room extends Component {
  render(props) {
    console.log(this.props)
    return(
      <div className="room">
        ROOM
      </div>
    )
  }
}

export default Room;
