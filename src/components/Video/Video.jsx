import React, { Component } from 'react';


class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleSubmit(event) {
    debugger;
  }

  render() {
    return (
      <div>
        <form action="http://127.0.0.1:3000/videos/fileupload" method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
          <input type="file" name="file"></input><br />
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default Video;