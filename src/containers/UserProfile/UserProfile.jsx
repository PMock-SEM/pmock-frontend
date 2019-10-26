import React, { Component } from 'react';
import './user_profile.scss';
import Button from '../../components/Button/Button';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onUploadClick = (e) => {
    e.preventDefault();
    this.props.history.push('/upload_video');
  }

  render() {
    return (
      <div className='user-profile'>
        <div className='user-info'>
          <div className='user-avatar'></div>
          <div className='user-right'>
            <div className='user-name'>Firstname Lastname</div>
            <div className='user-description'>This is description</div>
            <div className='user-description'>This is a another description</div>
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

export default UserProfile;