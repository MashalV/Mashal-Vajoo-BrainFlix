import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import "./VideoUpload.scss";
import VideoUploadThumbnail from '../../components/VideoUploadThumbnail/VideoUploadThumbnail';
import VideoUploadInputs from '../../components/VideoUploadInputs/VideoUploadInputs';
import VideoUploadButtons from '../../components/VideoUploadButtons/VideoUploadButtons';
import { useState } from "react";


function VideoUpload() {

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

      // if (response.ok) {
      //   setSuccessMessage(true);
      //   setTimeout(() => {
      //     navigate('/');
      //   }, 2000);
      // } else {
      //   return;
      // }
    } catch (error) {
      console.error('Error posting video:', error);
    }
  };


  return (
    <>  
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
        <VideoUploadButtons onFormSubmit = {handleFormSubmit} />

    </>
  )
}

export default VideoUpload