import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SpotImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="spot-img-container">
      <div>
        <img src={ this.props.img } />
      </div>
    </div>);
  }
}

export default SpotImage;

//
