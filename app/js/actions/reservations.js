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


