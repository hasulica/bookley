
import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';

export default ({
  id, label, backgroundImage, isActive, appointments, onClick, currentDate, onDateChange, barImage
}) => {
  const click = (e) => {
    e.preventDefault();
    onClick(id)
  };

  const handleNewAppointment = (appointment) => {
    onDateChange(id, appointment)
  };
  
  return (
    
    <div className="RoomBox-image-container col-xs-12, col-md-6 col-lg-4">
      <img onClick={click} src={`./${backgroundImage}`} className="RoomBox-image" />
      <img src={`./${barImage}`} className="RoomBox-bar" />
      <p className="RoomBox-image-label">{label}</p>
          { isActive && (
      <Calendar currentDate={currentDate.toDate()} roomLabel={label} appointments={appointments} handleNewAppointment={handleNewAppointment} />
    )}
    </div>
    
  )
};
