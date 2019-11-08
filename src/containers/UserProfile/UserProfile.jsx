import React, { Component } from 'react';
import './user_profile.scss';
import Button from '../../components/Button/Button';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import { connect } from 'react-redux';
import { loadUserProfile } from '../../actions/userProfileAction';
import { loadVideoListByUserId } from '../../actions/videoListAction';
import utils from '../../utils';

class UserProfile extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadUserProfile(id);
    this.props.loadVideoListByUserId(id);
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
            <img className='user-avatar-image' alt='aaa' src={this.props.userProfile.avatarLink} ></img>
          </div>
          <div className='user-right'>
            <div className='user-name'>{this.props.userProfile.firstName}</div>
            <div className='user-description'>{this.props.userProfile.lastName}</div>
            <div className='user-description'>{this.props.userProfile.email}</div>
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
              {
                this.props.videoList.map(video => {
                  return (
                    <VideoThumbnail uploader={video.userName} createTime={utils.convertTimeStamp(video.createdTime)} title={video.videoName} videoUrl={video.videoUrl} />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userProfile, videoList } = state;
  return { userProfile, videoList };
};

const mapDispatchToProps = {
  loadUserProfile,
  loadVideoListByUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);