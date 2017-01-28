import React from 'react';

const Layout = (props) => {
  return props.auth ? (
    <div>{props.children}</div>
  ) : (
    <div>not logged in :(</div>
  );
};

Layout.propTypes = {
  auth: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default Layout;
