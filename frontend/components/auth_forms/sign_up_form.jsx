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


  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(Object.assign({}, this.state))
      .then(() => this.props.router.push('/'));
  }

  render() {
    const { errors } = this.props;
    return (
        <form onSubmit={ this.handleSubmit }>
        <ErrorList errors={ errors.base } />

        <label htmlFor="username"></label>
        <input
          className="modal-input"
          type="text"
          placeholder="Username"
          onChange={ this.update("username")}
          value={ this.state.username }
          />
        <ErrorList errors={ errors.username } />

        <label htmlFor="password"></label>
        <input
          className="modal-input"
          type="password"
          placeholder="Create a Password"
          onChange={ this.update("password")}
          value={ this.state.password}
          />
        <ErrorList errors={ errors.password } />
        <label htmlFor="f_name"></label>
        <input
          className="modal-input"
          type="text"
          placeholder="First name"
          onChange={ this.update("f_name")}
          value={ this.state.f_name}
          />
        <ErrorList errors={ errors.f_name } />
        <label htmlFor="l_name"></label>
        <input
          className="modal-input"
          type="text"
          placeholder="Last name"
          onChange={ this.update("l_name")}
          value={ this.state.l_name}
          />
        <ErrorList errors={ errors.l_name } />
        <label htmlFor="email"></label>
        <input
          className="modal-input"
          type="text"
          placeholder="Email address"
          onChange={ this.update("email")}
          value={ this.state.email}
          />
        <ErrorList errors={ errors.email } />
        <button className="modal-button">Sign Up</button>
      </form>
    );
  }

}

export default withRouter(SignUpForm);
