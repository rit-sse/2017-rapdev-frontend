import React from 'react';
import 'scss/reservationList.scss';
import moment from 'moment';

import ReservationTile from './ReservationTile';

class MyReservations extends React.Component {
  constructor(props) {
    super(props);
    this.makeReservationTile = this.makeReservationTile.bind(this);
    this.sortReservations = this.sortReservations.bind(this);
  }

  makeReservationTile(data, index) {
    return (
      <ReservationTile
        key={data.id}
        {...data}
        onDeleteClick={() => {delete this.props.reservations[index]; this.setState({});}}
      />
    );
  }

  sortReservations(reservation1, reservation2) {
    if(moment(reservation1.startTime) < moment(reservation2.startTime)) {
      return -1;
    } else if (moment(reservation1.startTime) > moment(reservation2.startTime)) {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    // console.log()
    return (
      <div className="col-12">
        <div className="my-reservations-container">
          <div className="header">
            <h1>My Reservations</h1>
            <div className="new-reservation-container">
              <button
                className="add-reservation btn btn-secondary"
                onClick={this.props.onAddReservationClick}
              >
                <i className="fa fa-plus"></i> New Reservation
              </button>
            </div>
          </div>
          <div className="my-reservations-list">
            {(this.props.reservations.length <= 0) ? 
              (<h2>No Reservations</h2>) : (null)
            }
            {this.props.reservations.sort(this.sortReservations).map(this.makeReservationTile)}
          </div>
        </div>
      </div>
    );
  }
}

MyReservations.propTypes = {
  onAddReservationClick: React.PropTypes.func,
  reservations: React.PropTypes.arrayOf(React.PropTypes.object),
  showNewReservationEditor: React.PropTypes.bool
};

MyReservations.defaultProps = {
  onAddReservationClick: () => {},
  showNewReservationEditor: false
};

export default MyReservations;
