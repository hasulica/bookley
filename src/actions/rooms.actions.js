export const RECEIVED_APPOINTMENT = 'RECEIVED_APPOINTMENT'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'

export const receivedAppointment = (appointment) => ({
  type: RECEIVED_APPOINTMENT,
  payload: appointment,
});

export const deletedAppointment = (id) => ({
  type: DELETE_APPOINTMENT,
  payload: id,
});