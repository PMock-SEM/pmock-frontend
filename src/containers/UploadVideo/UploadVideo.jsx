import React, { Component, useCallback } from 'react';
import './uploadVideo.scss';
import Dropzone from 'react-dropzone';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class UploadVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: {
        title: '',
        file: null
      }

    };
  }

  onDrop = acceptedFiles => {
    console.log(acceptedFiles);
    const reader = new FileReader();
    reader.onload = () => {
      const binaryStr = reader.result;
      console.log(binaryStr);
    }
    acceptedFiles.forEach(file => {
      reader.readAsArrayBuffer(file);
      this.setState({
        video: {
          ...this.state.video,
          file: file
        }
      });
    })
  };

  onTitleChange = (e) => {
    this.setState({
      video: {
        ...this.state.video,
        title: e.target.value
      }
    });
  };

  onSubmitClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className='upload-video'>
        <div className='video-information'>
          <Input placeholder="Title" onInputChange={this.onTitleChange}></Input>
        </div>
        <div className='upload-viewer'>
          <Dropzone onDrop={this.onDrop} >
            {({ getRootProps, getInputProps }) => (
              <div className='upload-inner' {...getRootProps()}>
                <input {...getInputProps()} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='cloud-svg'><path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" /></svg>
                <h1 className='drag-and-drop'>Drag and drop your video</h1>
                <span className='min-requirements'>1920x1080 or larger recommended, up to 10 MB each</span>
              </div>
            )}
          </Dropzone>
        </div>
        <Button onButtonClick={this.onSubmitClick} text='Submit'></Button>
      </div>
    )
  }
}

export default UploadVideo;