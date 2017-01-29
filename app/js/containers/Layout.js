import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { signIn } from '../actions/auth';

function mapStateToProps(store) {
  return {
    auth: store.auth.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user, pass) => dispatch(signIn(user, pass)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
