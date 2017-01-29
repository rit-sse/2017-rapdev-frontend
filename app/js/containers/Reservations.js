import { connect } from 'react-redux';

import { openReservationCreator } from '../actions/reservations';
import Reservations from '../pages/Reservations';

function mapStateToProps(state) {
  return {
    showNewReservationEditor: state.reservations.showNewReservationEditor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddReservationClick: () => dispatch(openReservationCreator())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
