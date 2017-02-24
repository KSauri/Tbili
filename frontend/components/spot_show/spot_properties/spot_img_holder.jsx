import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SpotImage extends Component {
  constructor(props) {
    super(props);
  }

  spinner() {
    return (
      <div className="sk-cube-grid spinner-loading">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>);
  }

  render() {
    return (<div className="spot-img-container">
      <div>
        { this.props.loading ? this.spinner() : <img src={ this.props.img } /> }
      </div>
    </div>);
  }
}

export default SpotImage;

//
