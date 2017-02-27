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


  componentDidMount() {
    window.addEventListener("keydown", this.preventSubmit);
  }

  componentWillUnmount() {

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
      <div>
        <div className="flex-row progress-holder">
          <div className="step-two-progress"></div>
          <div className="step-two-unprogress"></div>
        </div>
        <div className="photo-upload-container">
          <label>Show travelers what your space looks like</label>
          <form className="flex-row photo-upload-form" onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.updateFile} />
            { this.state.imageUrl ? <input type="submit" className="photo-upload-btn" value="Add your spot's pic!"/> : null }
          </form>
        </div>
        <div className="upload-img-container">
          { this.state.imageUrl ? <img className="upload-img" src={this.state.imageUrl} /> : null }
        </div>
      </div>
    );
  }
}

export default PhotoUpload;
