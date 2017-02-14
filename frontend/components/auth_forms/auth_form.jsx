import React, { Component } from 'react';
import ErrorList from './error_list';
import { withRouter, hashHistory } from 'react-router';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(Object.assign({}, this.state))
      .then(() => this.props.router.push('/'));
  }

  render() {
    const { errors } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <ErrorList errors={ errors.base } />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={ this.update("username")}
          value={ this.state.username }
          />
        <ErrorList errors={ errors.username } />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={ this.update("password")}
          value={ this.state.password}
          />
        <ErrorList errors={ errors.password } />
        <button>{ this.props.submitText }</button>
      </form>
    );
  }

}

export default withRouter(AuthForm);
