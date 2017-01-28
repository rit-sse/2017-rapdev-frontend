import React from 'react';
import Navbar from '../containers/Navbar';

const Layout = (props) => {
  return props.auth ? (
    <div>
      <Navbar />
      {props.children}
    </div>
  ) : (
    <div>
      <Navbar />
      <p>not logged in</p>
    </div>
  );
};

Layout.propTypes = {
  auth: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Layout;
