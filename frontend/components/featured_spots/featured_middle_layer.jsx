import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedNonHomes from './featured_non_homes';
import FeaturedHomes from './featured_homes';
import FeaturedFancyHomes from './featured_fancy_homes';


export default class FeaturedMiddleLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeaturedSpots();
  }

  render() {
    return (
      <div>
        <span className="featured-desc" >Popular Spots</span>
        <FeaturedNonHomes spots={ this.props.non_home_spots } />
        <span className="featured-desc" >Desired Locales</span>
        <FeaturedFancyHomes spots={ this.props.fancy_home_spots } />
        <span className="featured-desc" >Affordable Getaways</span>
        <FeaturedHomes spots={ this.props.home_spots } />
      </div>
    );
  }


}
