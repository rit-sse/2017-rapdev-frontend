import React, { Component } from 'react';
import 'scss/nav.scss'; // eslint-disable-line

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      opened: false,
    };
  }

  toggleDropdown() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleDropdown} className="navbar-user" to="/user">User&nbsp;&nbsp;<i className="fa fa-caret-down" aria-hidden="true" /></button>
        <div className={this.state.opened ? 'dropdown opened' : 'dropdown'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Dropdown;
