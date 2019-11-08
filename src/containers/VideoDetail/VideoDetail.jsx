import React, { Component } from 'react';
import config from '../../config';
import './VideoDetail.scss';
import Video from '../../components/Video/Video';
import { connect } from 'react-redux';
import CommentList from "../../components/Comments/CommentList";
import CommentForm from "../../components/Comments/CommentForm";
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import { loadVideoDetail } from '../../actions/videoDetailAction';
import { loadVideoListByUserId } from '../../actions/videoListAction';
import { loadFeedbackListByVideoId, addFeedback } from '../../actions/feedbackListAction';
import utils from '../../utils';

class VideoDetail extends Component {
  componentWillMount() {
    const videoId = this.props.match.params.id;
    this.props.loadVideoDetail(videoId);
    this.props.loadFeedbackListByVideoId(videoId);
    this.props.loadVideoListByUserId('5db74a7fd56be13c6a37f338');
  }

  render() {
    return (
      <div className="video-detail">
        <div className="main">
          <div>
            <Video videoId={this.props.videoDetail._id}
              videoUrl={this.props.videoDetail.videoUrl}
              videoName={this.props.videoDetail.videoName}
              createTime={utils.convertTimeStamp(this.props.videoDetail.createdAt)} />
          </div>
          <div className="row">
            <div className="col-4 pt-3 border-right">
              <h3>Comments</h3>
              <CommentForm addComment={this.props.addFeedback} />
            </div>
            <div className="col-8 pt-3 bg-white">
              <CommentList
                comments={this.props.feedbackList}
              />
            </div>
          </div>
        </div>
        <div className='side'>
          {
            this.props.videoList.map(video => {
              return (
                <VideoThumbnail uploader={video.userName} createTime={utils.convertTimeStamp(video.createdTime)} title={video.videoName} videoUrl={video.videoUrl} />
              );
            })
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { videoDetail, feedbackList, videoList, auth } = state;
  return { videoDetail, feedbackList, videoList, auth };
};

const mapDispatchToProps = {
  loadVideoDetail,
  loadFeedbackListByVideoId,
  loadVideoListByUserId,
  addFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);