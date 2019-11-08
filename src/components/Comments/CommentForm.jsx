import React, { Component } from "react";
import './commentForm.scss';
import Button from "../Button/Button";
import { addFeedback } from '../../actions/feedbackListAction';
import { connect } from 'react-redux';

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
      const coachId = "5db346344c126601f0c1d606";
      this.props.addFeedback(videoId, coachId, this.state.comment);
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
      <div>
        <form method="post">
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              className="form-control"
              placeholder="Your Comment"
              rows="5"
            />
          </div>
          {this.renderError()}
          <div className="form-group">
            <Button className='comment-btn' text='Comment' onButtonClick={this.onCommentClick} />
          </div>
        </form>
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