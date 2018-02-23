export const RECEIVED_APPOINTMENT = 'RECEIVED_APPOINTMENT'
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT'

export function receivedAppointment(appointment) {
  return {
    type: RECEIVED_APPOINTMENT,
    payload: appointment,
  }
}
export function deletedAppointment(id) {
  return {
    type: DELETE_APPOINTMENT,
    payload: id,
  }
}