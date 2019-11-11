import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div className="commentList">
        {
          comments.length === 0 &&
          (<div className="alert text-center alert-info">Be the first to comment</div>)
        }
        {comments.map((comment, index) => (
          <Comment key={index} content={comment.content} coachId={comment.coachId} />
        ))}
      </div>
    );
  }
}

export default CommentList;