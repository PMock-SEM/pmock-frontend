import React, { Component } from "react";
import utils from '../../utils';

class Comment extends Component {
  render() {
    const { content, createdAt } = this.props.comment;
    return (
      <div className="media mb-3">
        <img className="mr-3 bg-light rounded" width="48" height="48" alt="" />
        <div className="media-body p-2 shadow-sm rounded bg-light border">
          <small className="float-right text-muted">{utils.convertTimeStamp(createdAt)}</small>
          {content}
        </div>
      </div>
    );
  }
}

export default Comment;