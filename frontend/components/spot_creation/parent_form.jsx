import PhotoUploadContainer from './step_two/photo_upload_container';
import Address from './step_three/address';
import StepOne from './step_one/form_step_one';
import React from 'react';
import merge from 'lodash/merge';

class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSpot: {},
      formProps: null,
      currentForm: 0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
    this.handleStepThree = this.handleStepThree.bind(this);
  }

  handleStepOneErrors() {

  }

  handleStepTwoErrors() {

  }

  handleStepThreeErrors() {

  }

  handleStepOne(form) {
    this.setState({ newSpot: merge(this.state.newSpot, form), currentForm: 1 });
  }

  handleStepTwo(form) {
    this.setState({ newSpot: merge(this.state.newSpot, { imageFile: form }), currentForm: 2 });
  }

  handleStepThree(address) {
    this.setState({ newSpot: merge(this.state.newSpot, address), currentForm: 3 });
  }

  formArray(idx) {
    return [<StepOne submitStepOne={ this.handleStepOne } />,
    <PhotoUploadContainer submitStepTwo={ this.handleStepTwo }/>,
    <Address submitStepThree={ this.handleStepThree } />][idx];
    }

  submitForm(spot) {
    // TODO formate the submission
    this.props.createSpot(spot);
  }

  render() {
    if (this.state.currentForm === 3) {
      let formData = new FormData();
      formData.append("spot[image]", this.state.newSpot.imageFile);
      formData.append("spot[name]", this.state.newSpot.name);
      formData.append("spot[location]", this.state.newSpot.location);
      formData.append("spot[price]", this.state.newSpot.price);
      formData.append("spot[description]", this.state.newSpot.description);
      formData.append("spot[guest_limit]", this.state.newSpot.guest_limit);
      formData.append("spot[bed_number]", this.state.newSpot.bed_number);
      formData.append("spot[bathroom_number]", this.state.newSpot.bathroom_number);
      formData.append("spot[property_type]", this.state.newSpot.property_type);
      formData.append("spot[pets_allowed]", this.state.newSpot.pets_allowed);
      formData.append("spot[wireless_internet]", this.state.newSpot.wireless_internet);
      formData.append("spot[kitchen]", this.state.newSpot.kitchen);
      formData.append("spot[family_friendly]", this.state.newSpot.family_friendly);
      formData.append("spot[monthly_discount]", this.state.newSpot.monthly_discount);
      formData.append("spot[weekly_discount]", this.state.newSpot.weekly_discount);
      formData.append("spot[minimum_stay]", this.state.newSpot.minimum_stay);
      formData.append("spot[lat]", this.state.newSpot.lat);
      formData.append("spot[lng]", this.state.newSpot.lng);
      this.submitForm(formData);
    }
    return(
      <div className="form-parent">
        { this.formArray(this.state.currentForm) }
      </div>
    );
  }
}

export default ParentForm;

//

// name: "",
// location: "",
// price: 0,
// description: "",
// guest_limit: 16,
// bed_number: 1,
// bathroom_number: 1,
// property_type: "full home",
// pets_allowed: true,
// wireless_internet: true,
// kitchen: true,
// family_friendly: true,
// monthly_discount: 0,
// weekly_discount: 0,
// cancellation_policy: "strict",
// minimum_stay: 1,
// image: null,
// bounds: {}
