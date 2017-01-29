import { connect } from 'react-redux';
import Layout from '../components/Layout';

function mapStateToProps(store) {
  return {
    auth: store.auth.loggedIn,
  };
}

export default connect(mapStateToProps)(Layout);
