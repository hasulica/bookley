import React, {Component} from 'react'

export default (props) => {
  return (
      <div className="RoomBox-image-container col-xs-12, col-md-6 col-lg-4">
          <img src={props.imageSrc} className="RoomBox-image" />
          <p className="RoomBox-image-label">{props.label}</p>
      </div>
  )
}