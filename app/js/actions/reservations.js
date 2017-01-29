import { api } from './utils';

export const SET_ALL_RESERVATIONS = 'SET_ALL_RESERVATIONS';
export const OPEN_RESERVATION_CREATOR = 'OPEN_RESERVATION_CREATOR';
export const CLOSE_RESERVATION_CREATOR = 'CLOSE_RESERVATION_CREATOR';
export const CHANGE_FEATURE_SELECTION = 'CHANGE_FEATURE_SELECTION';

export function openReservationCreator() {
  return {
    type: OPEN_RESERVATION_CREATOR
  };
}

export function closeReservationCreator() {
  return {
    type: CLOSE_RESERVATION_CREATOR
  };
}

export function changeFeatureSelection(selected) {
  return {
    type: CHANGE_FEATURE_SELECTION,
    selected: selected
  };
}

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

