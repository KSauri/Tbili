import React, { Component } from 'react';
import ErrorList from './error_list';
import { withRouter, hashHistory } from 'react-router';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      l_name: "",
      f_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  componentDidMount() {
    this.props.clearErrors();      // Retrieve most recent errors
  }
  componentWillUnmount() {
    // debugger
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(Object.assign({}, this.state))
      .then(() => this.props.router.push('/'));
  }

  render() {
    const { errors } = this.props;
    return (
      <form className='modal-content' onSubmit={ this.handleSubmit }>
        <div className='modal-content-elements'>
          <label htmlFor="email">
            <ErrorList errors={ errors.email } />
            <input
              className="modal-input"
              type="email"
              placeholder="Email address"
              onChange={ this.update("email")}
              value={ this.state.email }
              />
          </label>
          <label htmlFor="f_name">
            <ErrorList errors={ errors.f_name } />
            <input
              className="modal-input"
              type="text"
              placeholder="First name"
              onChange={ this.update("f_name")}
              value={ this.state.f_name}
              />
          </label>
          <label htmlFor="l_name">
            <ErrorList errors={ errors.l_name } />
            <input
              className="modal-input"
              type="text"
              placeholder="Last name"
              onChange={ this.update("l_name")}
              value={ this.state.l_name}
              />
          </label>
          <label htmlFor="password">
            <ErrorList  errors={ errors.password } />
            <input
              className="modal-input"
              type="password"
              placeholder="Create a Password"
              onChange={ this.update("password")}
              value={ this.state.password}
              />
          </label>
          <button className="modal-btn">Sign Up</button>
        </div>
        <div className="modal-switch-container">
          <span className="modal-switch-text">Already have an account?</span>
          <button className="modal-btn switch-form" onClick={ this.props.switchForm }>Log In</button>
        </div>
      </form>
    );
  }

}

export default withRouter(SignUpForm);




// <ErrorList errors={ errors.username } />
// <input
//   className="modal-input"
//   type="text"
//   placeholder={ errors.email ? "Email " + errors.email : "Email address" }
//   onChange={ this.update("email")}
//   value={ this.state.email}
//   />
