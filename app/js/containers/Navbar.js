import { connect } from 'react-redux';
import { toggleDropdown } from '../actions/nav';
import Navbar from '../components/Navbar';
import { signIn } from '../actions/auth';

function mapStateToProps(store) {
  return {
    userDropdown: store.nav.userDropdown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDropdown: () => dispatch(toggleDropdown()),
    loginClicked: () => dispatch(signIn('admin', 'not really')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
