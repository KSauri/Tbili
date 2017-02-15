import React, {Component} from 'react';
import FormModal from './form_modal';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formType: null
    };
    this.switchForm = this.switchForm.bind(this);
  }

  showFormToggle() {
    return (e) => this.setState({
      showForm: !this.state.showForm
    });
  }
  switchForm(formType) {
    return (e) => this.setState({
      showForm: true,
      formType
    });
  }
  showLogIn() {
    return (e) => this.setState({
      showForm: true,
      formType: "logIn"
    });
  }
  showSignUp() {
    return (e) => this.setState({
      showForm: true,
      formType: "signUp"
    });
  }

  loggedIn() {
    return(
      <nav className="logged-out">
        <button onClick={ this.showLogIn() }>Log In</button>
        <button onClick={ this.showSignUp() }>Sign Up</button>
        { this.state.showForm ?
          <div className="modal-screen">
            <FormModal switchForm={ this.switchForm } formType={ this.state.formType } />
          </div>
          : null }
      </nav>
    );
  }

  userInfo(currentUser, logout) {
    return(<hgroup>
        <img className="user-img" src={currentUser.image_url} />
        <button onClick={this.props.logout}>Log Out</button>
      </hgroup>);
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? this.userInfo(this.props.currentUser, this.props.logout) : this.loggedIn() }
      </div>
    );
  }
}

export default NavBar;








// const sessionButtons = () => (
//   <nav className="logged-out">
//     <button onClick={ this.showLogIn() }>Log In</button>
//     <button onClick={ this.showSignUp() }>Sign Up</button>
//     { this.state.showForm ?
//       <div className="modal-screen">
//         <FormModal switchForm={ this.switchForm } formType={ this.state.formType } />
//       </div>
//       : null }
//     </nav>
//   );
//   const userInfo = (currentUser, logout) => (
//     <hgroup>
//       <img className="user-img" src={currentUser.image_url} />
//       <button onClick={this.props.logout}>Log Out</button>
//     </hgroup>
//   );
