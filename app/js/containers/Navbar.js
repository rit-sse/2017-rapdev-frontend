import { connect } from 'react-redux';
import { toggleDropdown } from '../actions/nav';
import Navbar from '../components/Navbar';

function mapStateToProps(store) {
  return {
    userDropdown: store.nav.userDropdown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDropdown: () => dispatch(toggleDropdown()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
