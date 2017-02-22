import React, { Component } from 'react';
import { withRouter } from 'react-router';

class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.submitStepTwo(this.state.imageFile);
    // let formData = new FormData();
    // formData.append("spot[image]", this.state.imageFile);
    // this.props.submitForm(formData);
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file,
        imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.updateFile} />
        <img src={this.state.imageUrl} />
        <input type="submit" value="Add your spot's pic!"/>
      </form>
    );
  }
}

export default PhotoUpload;
