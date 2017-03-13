import PhotoUploadContainer from './step_two/photo_upload_container';
import Address from './step_three/address';
import StepOne from './step_one/form_step_one';
import Spinner from './spinner/spinner';
import React from 'react';
import merge from 'lodash/merge';
import { withRouter, hashHistory } from "react-router";

class ParentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSpot: {},
      formProps: null,
      submitting: false,
      currentForm: 0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
    this.handleStepThree = this.handleStepThree.bind(this);
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
      <Address submitStepThree={ this.handleStepThree } />,
      <Spinner newSpot={ this.state.newSpot }
        submit={ this.props.createSpot } />][idx];
    }

  submitForm(spot) {
    this.props.createSpot(spot)
      .then(spot => {
        return this.props.router.push(`/spots/${spot.spot.id}`);
      });
  }

  render() {
    return(
      <div className="form-parent">
        { this.formArray(this.state.currentForm) }
      </div>
    );
  }
}

export default withRouter(ParentForm);
