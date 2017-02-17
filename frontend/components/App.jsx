import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';


class App extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return(
      <div>
        <NavBarContainer />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }

}


export default App;
