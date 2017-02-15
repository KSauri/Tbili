import React, {Component} from 'react';
import FormModal from './form_modal';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogIn: false,
      showSignUp: false
    };
  }

  showLogIn() {
    return (e) => this.setState({
      showLogIn: true,
      showSignUp: false
    });
  }
  showSignUp() {
    return (e) => this.setState({
      showLogIn: false,
      showSignUp: true
    });
  }

  render() {
    const sessionButtons = () => (
      <nav className="login-signup">
        <button onClick={ this.showLogIn() }>Log In</button>
        <button onClick={ this.showSignUp() }>Sign Up</button>
        <FormModal showSignUp={this.state.showSignUp} showLogIn={this.state.showLogIn} />
      </nav>
    );
    const userInfo = (currentUser, logout) => (
      <hgroup>
        <img className="user-img" src={currentUser.image_url} />
        <button onClick={this.props.logout}>Log Out</button>
      </hgroup>
    );
    return (
      <div>
        { this.props.currentUser ? userInfo(this.props.currentUser, this.props.logout) : sessionButtons() }
      </div>
    );
  }
}

export default NavBar;
