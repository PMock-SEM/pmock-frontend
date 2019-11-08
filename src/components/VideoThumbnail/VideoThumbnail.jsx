import React, { Component } from 'react';
import './videoThumbnail.scss';
import { NavLink } from 'react-router-dom';


class VideoThumbnail extends Component {
  getThumbnail(url) {
    let video = document.createElement('video');
    video.src = url;
    video.width = 270;
    video.height = 150;
    video.currentTime = 10;
    let canvas = document.createElement('canvas');
    canvas.width = 270;
    canvas.height = 150;
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    let dataURI = canvas.toDataURL('image/jpeg');
    return dataURI;
  }

  render() {
    return (
      <div className='video-thumbnail'>
        <div className='video-img'>
          <img src={this.getThumbnail(this.props.videoUrl)} alt=''></img>
        </div>
        <div className='video-description'>
          <NavLink to='/videos' className='video-title'>{this.props.title}</NavLink>
          <div className='video-uploader'>{this.props.uploader}</div>
          <div className='video-upload-time'>{this.props.createTime}</div>
        </div>
      </div>
    )
  }
}

export default VideoThumbnail;