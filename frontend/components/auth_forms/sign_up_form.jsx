import React, { Component } from 'react';
import ErrorList from './error_list';
import { withRouter, hashHistory } from 'react-router';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      l_name: "",
      f_name: "",
      email: ""
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

          <label htmlFor="username"></label>
          <input
            className="modal-input"
            type="text"
            placeholder={ errors.username ? "Username " + errors.username : "Username" }
            onChange={ this.update("username")}
            value={ this.state.username }
            />

          <label htmlFor="password"></label>
          <input
            className="modal-input"
            type="password"
            placeholder={ errors.password ? "Password " + errors.username : "Create a Password" }
            onChange={ this.update("password")}
            value={ this.state.password}
            />
          <label htmlFor="f_name"></label>
          <input
            className="modal-input"
            type="text"
            placeholder={ errors.f_name ? "First Name " + errors.username : "First Name" }
            onChange={ this.update("f_name")}
            value={ this.state.f_name}
            />
          <label htmlFor="l_name"></label>
          <input
            className="modal-input"
            type="text"
            placeholder={ errors.f_name ? "Last Name " + errors.username : "Last Name" }
            onChange={ this.update("l_name")}
            value={ this.state.l_name}
            />
          <label htmlFor="email"></label>
          <input
            className="modal-input"
            type="text"
            placeholder={ errors.email ? "Email " + errors.username : "Email address" }
            onChange={ this.update("email")}
            value={ this.state.email}
            />
          <button className="modal-btn">Sign Up</button>
        </div>
        <div className="modal-switch-container">
          <span>Already have an account?</span>
          <button className="modal-btn switch-form" onClick={ this.props.switchForm }>Log In</button>
        </div>
      </form>
    );
  }

}

export default withRouter(SignUpForm);




// <ErrorList errors={ errors.username } />
