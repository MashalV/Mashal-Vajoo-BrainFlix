import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import "./VideoUpload.scss";
import VideoUploadThumbnail from '../../components/VideoUploadThumbnail/VideoUploadThumbnail';
import VideoUploadInputs from '../../components/VideoUploadInputs/VideoUploadInputs';
import VideoUploadButtons from '../../components/VideoUploadButtons/VideoUploadButtons';
import { useState, useEffect } from "react";


function VideoUpload() {

    useEffect(() => {
      document.title = 'BrainFlix - Video Upload';
    }, []);

  const [videoDetails, setVideoDetails] = useState ({
    title: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails((details) => ({
      ...details,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoDetails),
      });
    } catch (error) {
      console.error('Error posting video:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };


  return (
    <form onSubmit = {handleSubmit}>  
        <section className = "border">
          <Navigation  /> 
        </section>
        <section className= "upload">
            <h1 className = "upload__title">Upload Video</h1>
        </section>
        <div className = "wrap">
          <section className= "wrap__left">
            <VideoUploadThumbnail />
          </section>
          <section className= "wrap__right">
            <VideoUploadInputs 
              videoDetails = {videoDetails}
              onInputChange ={handleInputChange} /> 
          </section>
        </div>
        <VideoUploadButtons onFormSubmit = {handleFormSubmit}  />
    </form>
  )
}

export default VideoUpload