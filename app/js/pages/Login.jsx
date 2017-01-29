import React from 'react';
import 'scss/login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }
  submit() {
    this.props.login(this.username.value, this.password.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="login">
            <h2 className="login-heading">Login</h2>
            <form>
              <input ref={ (c) => this.username = c } className="username" id="usernameField" placeholder="username" type="text" />
              <input ref={ (c) => this.password = c } className="username" id="passwordField" placeholder="password" type="password" />
            </form>
            <button onClick={this.submit} className="btn btn-outline-primary">submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
