export const RECEIVED_APPOINTMENT = 'RECEIVED_APPOINTMENT'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'
export const UPDATE_ROOM = 'UPDATE_ROOM'

export const receivedAppointment = (roomId, appointment) => ({
  type: RECEIVED_APPOINTMENT,
  payload: {
    roomId,
    appointment
  }
});

export const deletedAppointment = (id) => ({
  type: DELETE_APPOINTMENT,
  payload: id,
});

export const makeRoomActive = (id) => ({
  type: UPDATE_ROOM,
  payload: id,
});