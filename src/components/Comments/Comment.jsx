import React, { Component } from "react";
import utils from '../../utils';
import { NavLink } from 'react-router-dom';
import './comment.scss';
import axios from "axios";
import config from '../../config';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coachName: '',
      coachAvatar: ''
    }
  }

  componentWillMount() {
    axios.get(`${config.api}/coaches/${this.props.coachId}`).then((response) => {
      this.setState({
        coachName: response.data.data.coachFirstName + ' ' + response.data.data.coachLastName,
        coachAvatar: response.data.data.avatarLink
      });
    })
  }

  render() {
    return (
      <div className='feedback-item'>
        <div className='feedback-coach-info'>
          <img className='feedback-coach-avatar' alt='aaa' src={this.state.coachAvatar} ></img>
          <div className='feedback-coach-detail'>
            <NavLink className='feedback-coach-name' to={`/coaches/${this.props.coachId}`}>{this.state.coachName}</NavLink>
            <div className='feedback-coach-description'>Qualified by PMock platform</div>
          </div>
        </div>
        <div className='feedback-content'>{this.props.content}</div>
      </div>
    );
  }
}

export default Comment;