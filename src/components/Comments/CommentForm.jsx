import React, { Component } from "react";
import './commentForm.scss';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      comment: {
        message: ''
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleFieldChange = event => {
    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment
      }
    });
  };

  onSubmit(e) {
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    this.setState({ error: "" });
  }

  isFormValid() {
    return this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button className="btn btn-primary">
              Comment &#10148;
                        </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;