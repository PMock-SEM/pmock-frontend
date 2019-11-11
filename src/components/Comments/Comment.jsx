import React, { Component } from "react";
import utils from '../../utils';
import './comment.scss';
import axios from "axios";
import config from '../../config';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coachName: ''
    }
  }

  componentWillMount() {
    axios.get(`${config.api}/coaches/${this.props.coachId}`).then((response) => {
      this.setState({ coachName: response.data.data.coachFirstName + ' ' + response.data.data.coachLastName });
    })
  }

  render() {
    return (
      <div className='feedback-item'>
        <div className='feedback-coach-info'>
          <div className='feedback-coach-avatar'></div>
          <div className='feedback-coach-detail'>
            <div className='feedback-coach-name'>{this.state.coachName}</div>
            <div className='feedback-coach-description'>Qualified by PMock platform</div>
          </div>
        </div>
        <div className='feedback-content'>{this.props.content}</div>
      </div>
    );
  }
}

export default Comment;