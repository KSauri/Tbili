import React, {Component} from 'react';
import FormModal from './form_modal';
import { withRouter, hashHistory } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formType: null,
      searchVisible: false
    };
    this.switchForm = this.switchForm.bind(this);
    this.turnFormOff = this.turnFormOff.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.setState({ showForm: false });
    }
  }

  componentDidMount() {
    if (this.props.router.location.pathname === "/"){
      this.scrollListener();
    }
  }

  checkScroll(cb) {
    if(window.scrollY > 500) {
      !this.state.searchVisible && this.setState({ searchVisible: true });
    } else {
      this.state.searchVisible && this.setState({ searchVisible: false });
    }
  }

  scrollListener() {
    window.addEventListener("scroll", this.checkScroll);
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
      <section className={ this.state.searchVisible ? "stuck" : "unstuck" }>
        <nav className="nav-logged-out" >
          <img id="tbili-logo" src={window.fireplace} />
          <div className="search-bar">
            <div className={ this.state.searchVisible ? "search" : "search hidden"}>
              <img src={window.search} />
              Search Bar Holder
            </div>
          </div>
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
    return(
      <div className={ this.state.searchVisible ? "stuck" : "unstuck" }>
        <hgroup className="nav-logged-in">
          <img id="tbili-logo" className="not-home" src={window.fireplace} />
          <div className="search-bar">
            <div className={ this.state.searchVisible ? "search" : "search hidden"}>
              <img src={window.search} />
              Search Bar Holder
            </div>
          </div>
          <button className="nav-btn" onClick={this.props.logout}>Log Out</button>
          <img className="user-img" src={currentUser.image_url} />
        </hgroup>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? this.userInfo(this.props.currentUser, this.props.logout) : this.loggedOut() }
        <div className="placeholder-1"></div>
        <div className="placeholder-2"></div>
      </div>
    );
  }
}

export default withRouter(NavBar);


//


//
// if (nextProps.router.location.pathname !== "/"){
//   window.removeEventListener("scroll", this.checkScroll);
// } else if (nextProps.router.location.pathname === "/") {
//   window.addEventListener("scroll", this.checkScroll);
// }
