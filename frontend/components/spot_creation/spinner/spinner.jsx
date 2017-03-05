import React from 'react';
import { withRouter, hashHistory } from "react-router";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let formData = new FormData();
    formData.append("spot[image]", this.props.newSpot.imageFile);
    formData.append("spot[name]", this.props.newSpot.name);
    formData.append("spot[location]", this.props.newSpot.location);
    formData.append("spot[price]", this.props.newSpot.price);
    formData.append("spot[description]", this.props.newSpot.description);
    formData.append("spot[guest_limit]", this.props.newSpot.guest_limit);
    formData.append("spot[bed_number]", this.props.newSpot.bed_number);
    formData.append("spot[bathroom_number]", this.props.newSpot.bathroom_number);
    formData.append("spot[property_type]", this.props.newSpot.property_type);
    formData.append("spot[pets_allowed]", this.props.newSpot.pets_allowed);
    formData.append("spot[wireless_internet]", this.props.newSpot.wireless_internet);
    formData.append("spot[kitchen]", this.props.newSpot.kitchen);
    formData.append("spot[family_friendly]", this.props.newSpot.family_friendly);
    formData.append("spot[monthly_discount]", this.props.newSpot.monthly_discount);
    formData.append("spot[weekly_discount]", this.props.newSpot.weekly_discount);
    formData.append("spot[minimum_stay]", this.props.newSpot.minimum_stay);
    formData.append("spot[lat]", this.props.newSpot.lat);
    formData.append("spot[lng]", this.props.newSpot.lng);
    debugger
    this.props.submit(formData).then(spot => {
      return this.props.router.push(`/spots/${spot.spot.id}`);});
  }

  render() {
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

}

export default withRouter(Spinner);
