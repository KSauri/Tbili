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
    if (this.props.loading) {
      return this.spinner();
    }
    else {
      return (
        <div>
          <span className="featured-desc" >Popular Spots</span>
          <FeaturedNonHomes spots={ this.props.non_home_spots } loading={this.props.loading} />
          <span className="featured-desc" >Desired Locales</span>
          <FeaturedFancyHomes spots={ this.props.fancy_home_spots } loading={this.props.loading}/>
          <span className="featured-desc" >Affordable Getaways</span>
          <FeaturedHomes spots={ this.props.home_spots } loading={this.props.loading}/>
        </div>
      );
    }
  }


}
