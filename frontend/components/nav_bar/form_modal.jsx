import LogInContainer from '../auth_forms/log_in_container';
import SignUpContainer from '../auth_forms/sign_up_container';
import React, { Component } from 'react';


export default function ({ showLogIn, showSignUp }) {
  if (showLogIn)
   { return (
    <div className='modal-screen'>
      <LogInContainer />
    </div>
   ); }
  else if (showSignUp)
  { return (
    <div className='modal-screen'>
      <SignUpContainer className='modal-content'/>
    </div>
  ); }
  else { return null; }
}

// export default class FormModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       logInClass: this.props.showLogIn ? "modal-screen" : "modal-screen turn-off",
//       signUpClass: this.props.showSignUp ? "modal-screen" : "modal-screen turn-off"
//     };
//   }
//
//   componentDidMount() {
//     if (this.props.showLogIn)
//      { this.form_modal = (
//       <div className='modal-screen'>
//         <LogInContainer />
//       </div>
//      ); }
//     else if (this.props.showSignUp)
//     { this.form_modal = (
//       <div className='modal-screen'>
//         <SignUpContainer className='modal-content'/>
//       </div>
//     ); }
//     else { this.form_modal = null; }
//   }
//
//   render() {
//     debugger
//     return(
//       <div>
//         <div className={ this.state.logInClass }>
//           <LogInContainer className='modal-content'/>
//         </div>
//         <div className={ this.state.logInClass }>
//           <SignUpContainer className='modal-content'/>
//         </div>
//       </div>
//     );
//   }
// }
