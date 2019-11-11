import React, { Component } from 'react';
import './VideoDetail.scss';
import Video from '../../components/Video/Video';
import { connect } from 'react-redux';
import CommentList from "../../components/Comments/CommentList";
import CommentForm from "../../components/Comments/CommentForm";
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import { loadVideoDetail } from '../../actions/videoDetailAction';
import { loadVideoListByUserId } from '../../actions/videoListAction';
import { loadFeedbackListByVideoId } from '../../actions/feedbackListAction';
import { loadUserProfile } from '../../actions/userProfileAction';
import Button from "../../components/Button/Button";
import utils from '../../utils';
import { NavLink } from 'react-router-dom';

class VideoDetail extends Component {
  componentWillMount() {
    const videoId = this.props.match.params.id;
    this.props.loadVideoDetail(videoId).then(() => {
      this.props.loadVideoListByUserId(this.props.videoDetail.userId);
      this.props.loadUserProfile(this.props.videoDetail.userId);
    });
    this.props.loadFeedbackListByVideoId(videoId);
  }

  render() {
    return (
      <div className="video-detail">
        <div className="main">
          <Video videoId={this.props.videoDetail._id}
            videoUrl={this.props.videoDetail.videoUrl}
            videoName={this.props.videoDetail.videoName}
            createTime={utils.convertTimeStamp(this.props.videoDetail.createdTime)}
            createHour={utils.convertTimeStampToHour(this.props.videoDetail.createdTime)} />
          <div className="feedbacks">
            <div className="feedback-form">
              <div className="feedback-form-header">
                <h3 className="feedback-form-title">Feedbacks</h3>
                <Button className='invite-btn' text='Invite' />
              </div>
              {this.props.auth ? <CommentForm /> : "you should login to comment"}
            </div>
            <div className="col-8 pt-3 bg-white">
              <CommentList comments={this.props.feedbackList} />
            </div>
          </div>
        </div>
        <div className='side'>
          <div className='user-thumbnail'>
            <div className='user-avatar'>
              <img className='user-avatar-image' alt='aaa' src={this.props.userProfile.avatarLink} ></img>
            </div>
            <NavLink className='user-name' to={`/users/${this.props.userProfile._id}`}>
              <div className='user-first-name'>{this.props.userProfile.firstName}</div>
              <div className='user-last-name'>{this.props.userProfile.lastName}</div>
            </NavLink>
          </div>
          <div className='other-videos'>Other videos</div>
          {
            this.props.videoList.map(video => {
              return (
                <VideoThumbnail uploader={video.userName} videoId={video._id} createTime={utils.convertTimeStamp(video.createdTime)} title={video.videoName} videoUrl={video.videoUrl} />
              );
            })
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { videoDetail, feedbackList, videoList, auth, userProfile } = state;
  return { videoDetail, feedbackList, videoList, auth, userProfile };
};

const mapDispatchToProps = {
  loadVideoDetail,
  loadFeedbackListByVideoId,
  loadVideoListByUserId,
  loadUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);