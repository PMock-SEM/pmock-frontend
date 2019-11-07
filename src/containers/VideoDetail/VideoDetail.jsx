import React, { Component } from 'react';
import config from '../../config';
import './VideoDetail.scss';
import {Video} from '../../components/Video/Video';
import CommentList from "../../components/Comments/CommentList";
import CommentForm from "../../components/Comments/CommentForm";
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

class VideoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false,
            video: {},
            videoId: ''
        };
        this.addComment = this.addComment.bind(this);
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.setState({videoId: id});
        fetch(`${config.api}/videos/${id}`).then(res => {
            this.setState({video: res.data });
        });
    }

    componentDidMount() {
        // loading
        this.setState({ loading: true });

        // get all the comments
        fetch(`${config.api}/videos/${this.state.videoId}/feedbacks`)
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
    addComment(feedback) {
        this.setState({
            loading: false,
            comments: [feedback, ...this.state.comments]
        });
    }
    render() {
        return(
            <div className="video-detail">
                <div className="main">
                    <div style={{maxWidth: '80%'}}>
                        <Video
                            videoUrl={this.state.video.videoUrl}/>
                    </div>
                    <div className="row">
                        <div className="col-4 pt-3 border-right">
                            <h3>Comments</h3>
                            <CommentForm addComment={this.addComment}/>
                        </div>
                        <div className="col-8 pt-3 bg-white">
                            <CommentList
                                loading={this.state.loading}
                                comments={this.state.comments}
                            />
                        </div>
                    </div>
                </div>
                <div className='side'>
                    <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video'
                                    videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
                    <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video'
                                    videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
                    <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video'
                                    videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
                    <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video'
                                    videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
                    <VideoThumbnail uploader='Niro' createTime='2019-10-10' title='My first presentation video'
                                    videoUrl='https://storage.cloud.google.com/pmock/y2mate.com%20-%20how_to_do_a_presentation_5_steps_to_a_killer_opener_dEDcc0aCjaA_360p.mp4?authuser=2&folder&organizationId'></VideoThumbnail>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
