import React, { Component } from 'react';
import './coachProfile.scss';
import Button from '../../components/Button/Button';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';
import { connect } from 'react-redux';
import { loadCoachProfile } from '../../actions/coachProfileAction';
import utils from '../../utils';

class CoachProfile extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadCoachProfile(id);
    // this.props.loadVideoListBycoachId(id);
  }

  render() {
    return (
      <div className='coach-profile'>
        <div className='coach-info'>
          <div className='coach-avatar'>
            <img className='coach-avatar-image' alt='aaa' src={this.props.coachProfile.avatarLink} ></img>
          </div>
          <div className='coach-right'>
            <div className='coach-name'>{this.props.coachProfile.coachFirstName}</div>
            <div className='coach-description'>{this.props.coachProfile.coachLastName}</div>
            <div className='coach-description'>{this.props.coachProfile.coachEmail}</div>
          </div>
        </div>
        <div className='coach-main'>
          <div className='coach-main-left'>
            <div className='coach-main-tab'>Videos</div>
            <div className='coach-main-tab'>Feedbacks</div>
          </div>
          <div className='coach-main-right'>

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
  loadCoachProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfile);