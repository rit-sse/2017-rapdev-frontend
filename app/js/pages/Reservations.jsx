import React from 'react';
import SubNav from '../components/SubNav';
import MyReservations from '../components/MyReservations';

const Reservations = () => (
  <div>
    <div className="row" style={{ paddingTop: '5%' }}>
      <div className="col-12">
        <div className="text-center">
          <SubNav />
        </div>
        <MyReservations />
      </div>
    </div>
  </div>
);

export default Reservations;
