import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        <h5 className="text-muted mb-4">
          <span className="badge badge-success">{this.props.comments.length}</span>
          Comments
        </h5>
        {
          this.props.comments.length === 0 &&
          (<div className="alert text-center alert-info">Be the first to comment</div>)
        }
        {this.props.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    );
  }
}

export default CommentList;