import React, { Component } from 'react';
import AuthForm from './auth_form';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();      // Retrieve most recent errors
  }


  render() {
    return (
      <section>
        <AuthForm submitText="Sign Up"
          submitForm={ this.props.signup }
          errors={ this.props.errors }/>
        <div>
          Already have a Tbili account?
        </div>
      </section>
    );
  }
}

export default SignUpForm;
