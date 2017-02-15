import React, { Component } from 'react';
import ErrorList from './error_list';

class LogInForm extends Component {
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
    this.props.login(Object.assign({}, this.state));
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    const { errors } = this.props;
    return (
      <div className='modal-content'>
        <form className='login-modal-content-elements' onSubmit={ this.handleSubmit }>

          <button className="modal-btn">Log in as Guest</button>
          <label htmlFor="username">
            <input
              className="modal-input"
              type="text"

              placeholder={ errors.base? errors.base : "Username" }
              onChange={ this.update("username")}
              value={ this.state.username }
              />
          </label>

          <label htmlFor="password">
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
        <div className="modal-switch-container">
          <span>Don't have an account yet?</span>
          <button className="modal-btn switch-form" onClick={ this.props.switchForm }>Sign Up</button>
        </div>
    </div>
    );
  }
}

export default LogInForm;
