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
    this.turnFormOff = this.turnFormOff.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState({ showForm: false });
    }
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
  turnFormOff(e) {
      { if (e.target.className === "modal-screen") {
        this.setState({
          showForm: false
        });
      }
    }
  }

  loggedOut() {
    return(
      <section>
        <nav className="nav-logged-out">
          <img id="tbili-logo" src={window.fireplace} />
          <div className="search-bar">Search Bar Holder</div>
          <button className="nav-btn" onClick={ this.showLogIn() }>Log In</button>
          <button className="nav-btn" onClick={ this.showSignUp() }>Sign Up</button>
        </nav>
        { this.state.showForm ?
          <div className="modal-screen" onClick={ this.turnFormOff }>
            <FormModal onClick={ null } switchForm={ this.switchForm } formType={ this.state.formType } />
          </div>
          : null }
      </section>
    );
  }

  userInfo(currentUser, logout) {
    return(<hgroup className="nav-logged-in">
        <img id="tbili-logo" src={window.fireplace} />
        <div className="search-bar">Search Bar Holder</div>
        <img className="user-img" src={currentUser.image_url} />
        <button className="nav-btn" onClick={this.props.logout}>Log Out</button>
      </hgroup>);
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? this.userInfo(this.props.currentUser, this.props.logout) : this.loggedOut() }
      </div>
    );
  }
}

export default NavBar;
