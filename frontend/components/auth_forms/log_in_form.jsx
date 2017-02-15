import React, { Component } from 'react';
import AuthForm from './auth_form';

class LogInForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <section>
        <AuthForm submitText="Log In"
          submitForm={ this.props.login }
          errors={ this.props.errors }/>
        <div>
        </div>
      </section>
    );
  }
}

export default LogInForm;
