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
    if (this.props.location.pathname !== nextProps.location.pathname) {
    }
    if (this.props.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === "/")
    {
      this.setState({ homePage: true }); }
    else if (this.props.location.pathname !== nextProps.location.pathname && nextProps.location.pathname !== "/")
    {
      this.setState({ homePage: false }); }
    if (nextProps.currentUser) {
      this.props.closeFormModal();
      // this.setState({ showForm: false }); NB change here
    }
  }

  menuDropDownListener() {
    window.addEventListener("scroll", this.checkScroll);
  }

  componentDidMount() {
    if (this.props.router.location.pathname === "/"){
      this.menuDropDownListener();
    } else {
      this.setState({ homePage: false }); // The navbar only drops down on the home page
    }
  }

  checkScroll() {
    if(window.scrollY > 240) {
      !this.state.searchVisible && this.setState({ searchVisible: true });
    } else {
      this.state.searchVisible && this.setState({ searchVisible: false });
    }
  }

  showForm() {
    return (e) => {
      if (e.target.innerHTML == "Log In/Demo") {
        return this.props.showFormModal("logIn");
      } else { return this.props.showFormModal("signUp"); }
    };
  }

  switchForm(formType) {
    return (e) => this.props.showFormModal(formType);
  }

  turnFormOff(e) {
      { if (e.target.className === "modal-screen") {
        this.props.closeFormModal();
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

  logoAndSearch() {
    return (
      <div className="search-bar-nav-holder">
        <Link to="/">
          <img id="tbili-logo" className="not-home" src={window.fireplace} />
        </Link>
        <div className="search-bar">
          { (this.state.homePage) ? this.homeSearchBar() : this.searchBar() }
        </div>
      </div>);
  }

  loggedOut() {
    return(
      <section className={ this.state.homePage ? (this.state.searchVisible ? "stuck" : "unstuck") : "unstuck" }>
        <nav className="nav-logged-out" >
          { this.logoAndSearch() }
          <button className="nav-btn" onClick={ this.showForm() }>Log In/Demo</button>
          <button className="nav-btn" onClick={ this.showForm() }>Sign Up</button>
        </nav>
        { this.props.showForm ?
          <div className="modal-screen" onClick={ this.turnFormOff }>
            <FormModal onClick={ null } switchForm={ this.switchForm } formType={ this.props.formType } />
          </div>
          : null }
      </section>
    );
  }

  loggedIn(currentUser, logout) {
    return(
      <div className={ this.state.homePage ? (this.state.searchVisible ? "stuck" : "unstuck") : "unstuck" }>
        <div className="nav-logged-in">
          { this.logoAndSearch() }
          <Link className="nav-btn" to="/create">List your spot!</Link>
          <Link className="nav-btn" to="/listings">Your Listings</Link>
          <Link className="nav-btn" to="/trips">Your trips</Link>
          <button className="nav-btn" onClick={this.props.logout}>Log Out</button>
          <img className="user-img" src={currentUser.avatar_url} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logout) : this.loggedOut() }
      </div>
    );
  }
}

export default withRouter(NavBar);
