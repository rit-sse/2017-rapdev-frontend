import { connect } from 'react-redux';

import { openReservationCreator, loadReservation } from '../actions/reservations';
import Reservations from '../pages/Reservations';

function mapStateToProps(state) {
  return {
    showNewReservationEditor: state.reservations.showNewReservationEditor,
    reservations: state.reservations.reservations,
  };
}

function mapDispatchToProps(dispatch) {
  // Init
  dispatch(loadReservation());
  return {
    onAddReservationClick: () => dispatch(openReservationCreator())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
