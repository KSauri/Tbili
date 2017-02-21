import React, {Component} from 'react';
import FormModal from './form_modal';
import { withRouter, hashHistory, Link } from 'react-router';
import SearchBarContainer from './search_bar_container';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      formType: null,
      searchVisible: false,
      homePage: true
    };
    this.switchForm = this.switchForm.bind(this);
    this.turnFormOff = this.turnFormOff.bind(this);
    this.checkScroll = this.checkScroll.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === "/")
    { this.setState({ homePage: true }); }
    else if (this.props.location.pathname !== nextProps.location.pathname && nextProps.location.pathname !== "/")
    { this.setState({ homePage: false }); }
    if (nextProps.currentUser) {
      this.setState({ showForm: false });
    }

  }

  componentDidMount() {
    if (this.props.router.location.pathname === "/"){
      this.scrollListener();
    } else {
      this.setState({ homePage: false });
    }
  }

  componentWillUnmount() {
    //TODO turn off the listener
  }

  checkScroll(cb) {
    if(window.scrollY > 240) {
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

  homeSearchBar() {
    return (<div className={ this.state.searchVisible ? "search" : "search hidden"}>
      <SearchBarContainer />
    </div>);
  }

  searchBar() {
    return (<div className="search">
      <SearchBarContainer />
    </div>);
  }

  loggedOut() {
    return(
      <section className={ this.state.searchVisible ? "stuck" : "unstuck" }>
        <nav className="nav-logged-out" >
          <Link to="/">
            <img id="tbili-logo" className="not-home" src={window.fireplace} />
          </Link>
          <div className="search-bar">
            { (this.state.homePage) ? this.homeSearchBar() : this.searchBar() }
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
          <Link to="/">
            <img id="tbili-logo" className="not-home" src={window.fireplace} />
          </Link>
          <div className="search-bar">
            { (this.state.homePage) ? this.homeSearchBar() : this.searchBar() }
          </div>
          <button className="nav-btn" onClick={this.props.logout}>Log Out</button>
          <img className="user-img" src={currentUser.avatar_url} />
        </hgroup>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? this.userInfo(this.props.currentUser, this.props.logout) : this.loggedOut() }
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
