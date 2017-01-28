import React from 'react';
import { Link } from 'react-router';

const SubNav = () => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <Link to="/overview" type="button" className="btn btn-secondary" activeClassName="active">Room Status</Link>
    <Link to="/reservation" type="button" className="btn btn-secondary" activeClassName="active">Reservation</Link>
    <Link to="/myTeams" type="button" className="btn btn-secondary" activeClassName="active">My Teams</Link>
  </div>
);

export default SubNav;
