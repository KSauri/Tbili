import React, { Component } from 'react';
import ErrorList from './error_list';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(Object.assign({}, this.state));
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  componentWillUnmount() {
    this.props.clearErrors();
  }

  guestLogIn() {
    this.props.login({ email: "guest@fakemail.com", password: "password" });
  }

  render() {
    const { errors } = this.props;
    return (
      <div className='modal-content'>
        <div className='login-modal-content-elements'>
          <button className="modal-btn" onClick={ this.guestLogIn } >Log in as Guest</button>
          <form className="login-form" onSubmit={ this.handleSubmit }>
            <ErrorList errors={ errors.base } />
            <label htmlFor="email">
              <ErrorList className="form-errors" errors={ errors.l_name } />
              <input
                className="modal-input"
                type="email"
                placeholder="Email address"
                onChange={ this.update("email")}
                value={ this.state.email }
                />
            </label>

            <label htmlFor="password">
              <ErrorList errors={ errors.email } />
              <input
                className="modal-input"
                type="password"
                placeholder="Password"
                onChange={ this.update("password")}
                value={ this.state.password}
                />
            </label>
            <input type="submit" className="modal-btn" value="Log In" />
          </form>
        </div>
        <div className="modal-switch-container">
          <span className="modal-switch-text">Don't have an account yet?</span>
          <button className="modal-btn switch-form" onClick={ this.props.switchForm }>Sign Up</button>
        </div>
    </div>
    );
  }
}

export default LogInForm;
