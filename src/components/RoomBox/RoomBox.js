import React, { Component } from 'react'
export default ({ label, backgroundImage }) => (
  <div className="RoomBox-image-container col-xs-12">
    <img src={`./${backgroundImage}`} className="RoomBox-image" />
    <p className="RoomBox-image-label">{label}</p>
  </div>
)