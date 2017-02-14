import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Tbili</h1>
      <NavBarContainer />
      { children }
    </header>
  </div>
);

export default App;
