import React from 'react';
import { Link } from 'react-router';
import 'scss/nav.scss'; // eslint-disable-line

const Navbar = props => (
  <nav className="navbar-rapdev">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button onClick={props.toggleDropdown} className="navbar-user" to="/user">User&nbsp;&nbsp;<i className="fa fa-caret-down" aria-hidden="true" /></button>
    <button
      className={props.userDropdown ? 'dropdown opened' : 'dropdown'}
      onClick={() => props.loginClicked()}
    >Login</button>
  </nav>
);

Navbar.propTypes = {
  toggleDropdown: React.PropTypes.func.isRequired,
  userDropdown: React.PropTypes.bool.isRequired,
};

export default Navbar;
