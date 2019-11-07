
import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <iframe width={'560'} height={'315'} title={this.props.filename}
        src={this.props.videoUrl}
        frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
    );
  }
}

export default Video;