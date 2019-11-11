import React, { Component } from "react";
import './commentForm.scss';
import { addFeedback } from '../../actions/feedbackListAction';
import { connect } from 'react-redux';
import Button from "../Button/Button";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      comment: ''
    };
  }

  handleFieldChange = event => {
    this.setState({
      ...this.state,
      comment: event.target.value
    });
  };

  onCommentClick = (e) => {
    e.preventDefault();
    const valid = this.isFormValid();
    this.setState({ error: valid ? "" : "All fields are required." });
    if (valid) {
      const videoId = this.props.videoDetail._id;
      const coachId = this.props.auth._id;
      this.props.addFeedback(videoId, coachId, this.state.comment);
      this.state.comment = "";
    }
  }

  isFormValid() {
    return this.state.comment !== "";
  }

  renderError() {
    return this.state.error && (
      <div className="alert alert-danger">{this.state.error}</div>
    );
  }

  render() {
    return (
      <div className='feedback-form'>
        <textarea className='feedback-text-area' onChange={this.handleFieldChange} placeholder="Add your feedback here..." value={this.state.comment}>
        </textarea>
        <Button className='add-feedback-btn' text='Add feedback' onButtonClick={this.onCommentClick} ></Button>
        {this.renderError()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { feedbackList, auth, videoDetail } = state;
  return { feedbackList, auth, videoDetail };
};

const mapDispatchToProps = {
  addFeedback
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);