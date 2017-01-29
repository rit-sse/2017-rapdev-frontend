import { api } from './utils';

export const SET_ALL_RESERVATIONS = 'SET_ALL_RESERVATIONS';

export const loadReservation = () => {
  return (dispatch) => {
    return dispatch(api('/api/v1/reservation'))
      .then(reservation => {
        dispatch({
          type: SET_ALL_RESERVATIONS,
          reservation
        });
      });
  }
}
