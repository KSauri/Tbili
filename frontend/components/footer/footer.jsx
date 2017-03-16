import React from 'react';

const Footer = () =>
  <div className="footer">
    <div className="footer-left">
      <div className="language-currency">
        <h2>English</h2>
      </div>
      <div className="language-currency">
        <h2>USD</h2>
      </div>
    </div>
      <div className="footer-right">
        <a href="https://linkedin.com/in/kyle-sauri-1b673831" className="link-col">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/ksauri" className="link-col">
          <i className="fa fa-github" aria-hidden="true"></i>
          <span>Github</span>
        </a>
        <a href="http://www.kylesauri.com" className="link-col">
          <i className="fa fa-folder-open" aria-hidden="true"></i>
          <span>Portfolio</span>
        </a>
      </div>
  </div>

export default Footer;
