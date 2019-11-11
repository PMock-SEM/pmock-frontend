import React, { Component } from 'react';
import './coachProfile.scss';
import { connect } from 'react-redux';
import { loadCoachProfile, loadCoachFeedbacks } from '../../actions/coachProfileAction';
import FeedbackThumbnail from '../../components/FeedbackThumbnail/FeedbackThumbnail';

class CoachProfile extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadCoachProfile(id);
    this.props.loadCoachFeedbacks(id);
  }

  render() {
    return (
      <div className='coach-profile'>
        <div className='coach-info'>
          <div className='coach-avatar'>
            <img className='coach-avatar-image' alt='aaa' src={this.props.coachProfile.coach.avatarLink} ></img>
          </div>
          <div className='coach-right'>
            <div className='coach-name'>{this.props.coachProfile.coach.coachFirstName}</div>
            <div className='coach-description'>{this.props.coachProfile.coach.coachLastName}</div>
            <div className='coach-description'>{this.props.coachProfile.coach.coachEmail}</div>
          </div>
        </div>
        <div className='coach-main'>
          <div className='coach-main-left'>
            <div className='coach-main-tab'>Videos</div>
            <div className='coach-main-tab'>Feedbacks</div>
          </div>
          <div className='coach-main-right'>
            {this.props.coachProfile.feedbacks.map(feedback => (
              <FeedbackThumbnail videoId={feedback.videoId} content={feedback.content}></FeedbackThumbnail>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { coachProfile } = state;
  return { coachProfile };
};

const mapDispatchToProps = {
  loadCoachProfile,
  loadCoachFeedbacks

};

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfile);