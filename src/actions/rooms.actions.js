export const RECEIVED_APPTS = 'RECEIVED_APPTS'

export function receivedAppts(appts) {
  return {
    type: RECEIVED_APPTS,
    payload: appts,
  }
}