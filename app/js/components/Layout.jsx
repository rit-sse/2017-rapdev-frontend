import React from 'react';
import Navbar from '../containers/Navbar';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.auth ? props.children : <p>not logged in</p>}
      </div>
    </div>
  );
};

Layout.propTypes = {
  auth: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Layout;
