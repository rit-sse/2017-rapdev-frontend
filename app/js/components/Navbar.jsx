import React from 'react';
import { Link } from 'react-router';
import 'scss/nav.scss'; // eslint-disable-line
import Dropdown from './Dropdown';

const Navbar = () => (
  <nav className="navbar-rapdev">
    <Link className="navbar-brand" to="/">Logo</Link>
    <Dropdown>
      <Link to="/login">Login</Link>
    </Dropdown>
  </nav>
);

export default Navbar;
