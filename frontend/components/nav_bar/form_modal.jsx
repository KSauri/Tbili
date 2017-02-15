import LogInContainer from '../auth_forms/log_in_container';
import SignUpContainer from '../auth_forms/sign_up_container';
import React, { Component } from 'react';


// export default function ({ showLogIn, showSignUp }) {
//   if (showLogIn)
//    { return (
//     <div className='modal-screen'>
//       <LogInContainer />
//     </div>
//    ); }
//   else if (showSignUp)
//   { return (
//     <div className='modal-screen'>
//       <SignUpContainer className='modal-content'/>
//     </div>
//   ); }
//   else { return null; }
// }

export default class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logIn: this.props.showLogIn,
      signUpClass: this.props.showSignUp
    };
  }


  render() {
    if (this.state.logIn) {
      return (
      <div className="modal-screen">
        <LogInContainer className='modal-content'/>
      </div>);
    } else if (this.state.signUpClass) {
      return (
      <div className={ this.state.logInClass }>
        <SignUpContainer className='modal-content'/>
      </div>);
    } else {
      return null;
    }
  }
}
