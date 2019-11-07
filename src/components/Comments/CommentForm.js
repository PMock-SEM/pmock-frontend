import React, { Component } from "react";

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",

            feedback: {
                coachId: "",
                videoId: "",
                content: "",
                createdAt: ""
            }
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Handle form input field changes & update the state
     */
    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            feedback: {
                ...this.state.feedback,
                [name]: value
            }
        });
    };

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { feedback } = this.state.feedback;

        fetch("http://localhost:3000/feedbacks", {
            method: "post",
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    // add time return from api and push comment to parent state
                    feedback.createdAt = res.time;
                    this.props.addComment(feedback);

                    // clear the message box
                    this.setState({
                        loading: false,
                        feedback: { ...feedback, content: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while submitting form.",
                    loading: false
                });
            });
    }

    /**
     * Simple validation
     */
    isFormValid() {
        return  this.state.feedback.content !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    render() {
        return (
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea
                            onChange={this.handleFieldChange}
                            value={this.state.feedback.content}
                            className="form-control"
                            placeholder="Your Comment"
                            name="content"
                            rows="5"
                        />
                    </div>

                    {this.renderError()}

                    <div className="form-group">
                        <button disabled={this.state.loading} className="btn btn-primary">
                            Comment &#10148;
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
