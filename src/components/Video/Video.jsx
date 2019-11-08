
import React, { Component } from 'react';
import Player from 'griffith';
import './video.scss';

class Video extends Component {
  componentWillMount() {
    const script = document.createElement("script");
    script.src = 'https://unpkg.com/hls.js@0.7.11/dist/hls.light.min.js';
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    const sources = {
      hd: { play_url: this.props.videoUrl },
      sd: { play_url: this.props.videoUrl }
    }
    return (
      <div className='video'>
        <h1 className='video-name'>{this.props.videoName}</h1>
        <p className='video-description'>{`videos | ${this.props.createTime}`}</p>
        <Player id={this.props.videoId} sources={sources} />
      </div>

    );
  }
}

export default Video;