import React from 'react';
import SubNav from '../components/SubNav';
import MyReservations from '../components/MyReservations';
import ReservationEditor from '../containers/NewReservationEditor';

const Reservations = props => (
  <div>
    <div className="row" style={{ paddingTop: '5%' }}>
      <div className="col-12">
        <div className="text-center">
          <SubNav />
        </div>
        <MyReservations
          onAddReservationClick={props.onAddReservationClick}
        />
        {props.showNewReservationEditor ? (<ReservationEditor />) : null}
      </div>
    </div>
  </div>
);

Reservations.propTypes = {
  onAddReservationClick: React.PropTypes.func,
  showNewReservationEditor: React.PropTypes.bool
};

Reservations.defaultProps = {
  onAddReservationClick: () => {},
  showNewReservationEditor: false
};

export default Reservations;
