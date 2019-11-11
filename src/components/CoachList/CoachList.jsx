import React, { Component } from 'react';
import './coachList.scss';
import Button from '../Button/Button';

const CoachThumbnail = (props) => {
  return (
    <div className='coach-thumbnail'>
      <div className='coach-avatar'>
        <img className='coach-avatar-image' alt='aaa' src={props.avatarLink} ></img>
      </div>
      <div className='coach-information'>
        <div className='coach-name'>{props.firstName + ' ' + props.lastName}</div>
        <div className='coach-description'>Qualified by PMock platform</div>
      </div>
      <div className='coach-invite'>
        <Button className='invite-coach-btn' text='invite'></Button>
      </div>
    </div>
  )
}

class CoachList extends Component {
  render() {
    return (
      <div className='coach-list'>
        <div className='coach-list-header'>
          Professionals
        </div>
        <div className='coach-items'>
          {this.props.coaches.map(
            coach => (
              <CoachThumbnail avatarLink={coach.avatarLink} firstName={coach.coachFirstName} lastName={coach.coachLastName} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default CoachList;