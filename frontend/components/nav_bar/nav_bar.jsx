import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" >Log In</Link>
    <Link to="/signup" >Sign Up</Link>
  </nav>
);

const userInfo = (currentUser, logout) => {
  return (<hgroup>
    <img src={currentUser.image_url} />
    <button onClick={logout}>Log Out</button>
  </hgroup>
)};

const NavBar = ({ currentUser, logout }) => (
  currentUser ? userInfo(currentUser, logout) : sessionLinks()
);

export default NavBar;

//TODO add activeClassName="current" to sessionlinks (greeting.jsx in bench)
//TODO messages at top
//TODO drop down on profile picture
