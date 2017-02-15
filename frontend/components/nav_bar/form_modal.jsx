import LogInContainer from '../auth_forms/log_in_container';
import SignUpContainer from '../auth_forms/sign_up_container';
import React, { Component } from 'react';



export default class FormModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.formType === "logIn") {
      return (
        <div>
          <LogInContainer className='modal-content' switchForm={ this.props.switchForm("signUp") }/>
        </div>);
    } else if (this.props.formType === "signUp") {
      return (
        <div>
          <SignUpContainer switchForm={ this.props.switchForm("logIn") }/>
        </div>);
    } else {
      return null;
    }
  }
}
