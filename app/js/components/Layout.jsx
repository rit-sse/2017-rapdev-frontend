import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.auth ? props.children : <Login login={props.login} />}
      </div>
    </div>
  );
};

Layout.propTypes = {
  auth: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Layout;
