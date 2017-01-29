import * as actions from '../actions/reservations';

const initState = {
  showNewReservationEditor: false
};

export default function(state = initState, action) {
  switch(action.type) {
  case actions.CLOSE_RESERVATION_CREATOR:
    return {
      ...state,
      showNewReservationEditor: false
    };

  case actions.OPEN_RESERVATION_CREATOR:
    return {
      ...state,
      showNewReservationEditor: true
    };
  default:
    return state;
  }
}
