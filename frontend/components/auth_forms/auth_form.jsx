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
    this.props.submitForm(Object.assign({}, this.state));
  }

  render() {
    const { errors } = this.props;
    return (
      <div className='modal-content'>
        <form onSubmit={ this.handleSubmit }>
          <ErrorList errors={ errors.base } />
          <button className="modal-button guest-btn">Log in as Guest</button>
          <label htmlFor="username">
            <input
              className="modal-input"
              type="text"
              placeholder="Username"
              onChange={ this.update("username")}
              value={ this.state.username }
              />
          </label>
          <ErrorList errors={ errors.username } />

          <label htmlFor="password">
            <input
              className="modal-input"
              type="password"
              placeholder="Password"
              onChange={ this.update("password")}
              value={ this.state.password}
              />
          </label>
          <ErrorList errors={ errors.password } />
          <button className="modal-button">{ this.props.submitText }</button>
        </form>
      </div>
    );
  }

}

export default withRouter(AuthForm);


// .then(() => this.props.router.push('/'))
