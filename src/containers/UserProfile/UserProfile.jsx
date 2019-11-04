import React, { Component } from 'react';
import './user_profile.scss';
import Button from '../../components/Button/Button';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({
        firstName: nextProps.auth.firstName,
        lastName: nextProps.auth.lastName,
        email: nextProps.auth.email,
        avatarLink: nextProps.auth.avatarLink
      });
    }
  }

  onUploadClick = (e) => {
    e.preventDefault();
    this.props.history.push('/upload_video');
  }

  render() {
    return (
      <div className='user-profile'>
        <div className='user-info'>
          <div className='user-avatar'>
            <img src={this.state.avatarLink} style={{ width: 75, height: 75, position: 'absolute', top: this.props.top, left: this.props.left }}></img>
          </div>
          <div className='user-right'>
            <div className='user-name'>{this.state.firstName}</div>
            <div className='user-description'>{this.state.lastName}</div>
            <div className='user-description'>{this.state.email}</div>
          </div>
        </div>
        <div className='user-main'>
          <div className='user-main-left'>
            <div className='user-main-tab'>Videos</div>
            <div className='user-main-tab'>Feedbacks</div>
          </div>
          <div className='user-main-right'>
            <Button text='Upload a presentation video' onButtonClick={this.onUploadClick} to='/upload_video' />
            <div className='video-thumbnails'>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
              <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video' videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, null)(UserProfile);