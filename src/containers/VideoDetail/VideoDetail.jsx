import React, { Component } from 'react';
import {Video} from '../../components/Video/Video';
import CommentList from "../../components/Comments/CommentList";
import CommentForm from "../../components/Comments/CommentForm";

class VideoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false
        };
        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        // loading
        this.setState({ loading: true });

        // get all the comments
        fetch("http://localhost:7777")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    /**
     * Add new comment
     * @param {Object} comment
     */
    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }
    render() {
        return(
            <div class="video-detail">
                <div style={{maxWidth: '80%'}}>
                    <Video id='O2oZ2ucI1mA'/>
                </div>
                <div className="row">
                    <div className="col-4  pt-3 border-right">
                        <h6>Say something about my presentation</h6>
                        <CommentForm addComment={this.addComment} />
                    </div>
                    <div className="col-8  pt-3 bg-white">
                        <CommentList
                            loading={this.state.loading}
                            comments={this.state.comments}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;