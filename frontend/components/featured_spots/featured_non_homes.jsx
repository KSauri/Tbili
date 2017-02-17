import React from 'react';
import { Link } from 'react-router';
import FeaturedSpotDetail from './featured_spot_detail';
import ReactDOM from 'react-dom';


export default class FeaturedNonHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotViewIdx: 1
    };
    this.spots = this.spots.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }


  spots() {
    return this.props.spots.map((spot, idx) => (
      <FeaturedSpotDetail key={spot.id}
        ownIdx={ idx }
        currIdx={ this.state.spotViewIdx }
        spot={spot} />
      )
    );
  }

  moveLeft() {
    return (e) => {
      if (this.state.spotViewIdx > 1) {
        this.setState({ spotViewIdx: (this.state.spotViewIdx - 1) });
      }
    };
  }

  moveRight() {
    return (e) => {
      if (this.state.spotViewIdx < 5) {
        this.setState({ spotViewIdx: (this.state.spotViewIdx + 1) });
      }
    };
  }

  render() {
    return (
      <div className="featured-holder">
        <button onClick={ this.moveLeft() } className="chevron-holder"><img className="chevron" src={window.chevronl} /></button>
        <ul className="featured-non-homes">{this.spots()}</ul>
        <button onClick={ this.moveRight() } className="chevron-holder"><img className="chevron" src={window.chevronr} /></button>
      </div>
    );
  }


}







// <Slider dots={true}>
// <div><img src='http://placekitten.com/g/400/200' /></div>
// <div><img src='http://placekitten.com/g/400/200' /></div>
// <div><img src='http://placekitten.com/g/400/200' /></div>
// <div><img src='http://placekitten.com/g/400/200' /></div>
// </Slider>

// class FeaturedNonHomes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.spots = this.spots.bind(this);
//   }
//   //
//   // spots() {
//   //   return this.props.spots.map((spot) => {
//   //     return (
//   //       <FeaturedSpotDetail key={spot.id} spot={spot}/>
//   //     );
//   //   });
//   // }
//
//   render() {
//     return (
//       <ul className="featured-spots-list group">{this.spots()}</ul>
//     );
//   }
//
// }
