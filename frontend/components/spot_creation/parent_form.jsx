import PhotoUploadContainer from './step_three/photo_upload_container';
import Address from './step_two/address';
import StepOne from './step_one/form_step_one';
import React from 'react';

class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepOne: null,
      stepTwo: null,
      stepThree: null,
      formProps: null,
      currentForm: 0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
  }

  handleStepOneErrors() {

  }

  handleStepTwoErrors() {

  }

  handleStepThreeErrors() {

  }

  handleStepOne(form) {
    this.setState({ stepOne: form, currentForm: 1 });
  }

  handleStepTwo(form) {
    this.setState({ stepTwo: form, currentForm: 2 });
  }

  handleStepThree() {

  }

  formArray(idx) {
    return [<StepOne submitForm={ this.handleStepOne } />,
    <PhotoUploadContainer submitForm={ this.handleStepTwo }/>,
    <Address  />][idx];
    }

  submitForm() {
    // TODO formate the submission
    this.props.createSpot(this.state);
  }

  render() {

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
