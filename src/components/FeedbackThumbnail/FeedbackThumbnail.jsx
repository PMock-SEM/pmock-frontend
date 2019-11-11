import React, { Component } from 'react';
import './feedbackThumbnail.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';


class FeedbackThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: ''
    }
  }
  componentWillMount() {
    const videoId = this.props.videoId;
    axios.get(`${config.api}/videos/${videoId}`).then(res => {
      const videoData = res.data.data;
      this.setState({ videoName: videoData.videoName })
    });
  }

  render() {
    return (
      <div className='feedback-thumbnail'>
        <NavLink className='video-name' to={`/video_detail/${this.props.videoId}`}>
          {this.state.videoName}
        </NavLink>
        <div className='feedback-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export default FeedbackThumbnail;