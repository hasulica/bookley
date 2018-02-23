export const SELECT_DATE = 'SELECT_DATE';

export function selectDate(date) {
  return {
    type: SELECT_DATE,
    payload: {
      currentDate: date,
    }
  }
}