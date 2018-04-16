import React, { Component } from 'react';
import { awsUpload } from '../../services/AWSservices/AWSservices'

import './AWSupload.css'

class AWSupload extends Component {
  constructor() {
    super()
  }

  uploadPhoto(file) {
    awsUpload(file)
  }

  render() {
    return (
      <div className="input__margin-top">
        <input type="file" onChange={(e) => this.uploadPhoto(e.target.files)}/>
      </div>
    );
  }
}

export default AWSupload;
