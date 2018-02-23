
import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';

export default ({
  id, label, backgroundImage, isActive, appointments, onClick, currentDate
}) => {
  const click = (e) => {
    e.preventDefault();
    onClick(id)
  };
  
  return (
    <div>
    <div className="RoomBox-image-container col-xs-12, col-md-6 col-lg-4">
      <img onClick={click} src={`./${backgroundImage}`} className="RoomBox-image" />
      <p className="RoomBox-image-label">{label}</p>
    </div>
    { isActive && (
      <Calendar currentDate={new Date()}/>
    )}
    </div>
  )
};
