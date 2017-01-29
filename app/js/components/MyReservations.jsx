import React from 'react';
import 'scss/reservationList.scss';
import moment from 'moment';

import ReservationTile from './ReservationTile';

const sampleReservations = [
  {
    id: 1,
    type: "Just You",
    roomNumber: "1661",
    startTime: "2017-01-28T22:30:00+00:00",
    endTime: "2017-01-28T23:00:00+00:00"
  },{
    id: 2,
    type: "Senior Project",
    roomNumber: "1662",
    startTime: "2017-01-30T22:30:00+00:00",
    endTime: "2017-01-30T23:00:00+00:00"
  },{
    id: 3,
    type: "Student Team",
    roomNumber: "1662",
    startTime: "2017-02-04T22:30:00+00:00",
    endTime: "2017-02-04T23:00:00+00:00"
  },{
    id: 4,
    type: "Just You",
    roomNumber: "1662",
    startTime: "2017-01-29T22:30:00+00:00",
    endTime: "2017-01-29T23:00:00+00:00"
  }
];

class MyReservations extends React.Component {
  constructor(props) {
    super(props);
    this.makeReservationTile = this.makeReservationTile.bind(this);
    this.sortReservations = this.sortReservations.bind(this);
  }

  makeReservationTile(data) {
    return (
      <ReservationTile
        key={data.id}
        {...data}
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
    return (
      <div className="col-12">
        <div className="my-reservations-container">
          <h1>My Reservations</h1>
          <div className="my-reservations-list">
            {sampleReservations.sort(this.sortReservations).map(this.makeReservationTile)}
          </div>
        </div>
      </div>
    );
  }
}

export default MyReservations;