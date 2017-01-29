import { connect } from 'react-redux';

import { closeReservationCreator } from '../actions/reservations';
import ReservationEditor from '../components/ReservationEditor/ReservationEditor';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCloseClick: () => dispatch(closeReservationCreator())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationEditor);
