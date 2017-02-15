import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import LogInContainer from './auth_forms/log_in_container';
import SignUpContainer from './auth_forms/sign_up_container';

class App extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return(
      <div>
        <NavBarContainer />
        <header>
          <h1>Tbili</h1>
          { this.props.children }
        </header>
      </div>
    );
  }

}


export default App;
