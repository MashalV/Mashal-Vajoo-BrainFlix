import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import "./VideoUpload.scss";
import VideoUploadThumbnail from '../../components/VideoUploadThumbnail/VideoUploadThumbnail';
import VideoUploadInputs from '../../components/VideoUploadInputs/VideoUploadInputs';
import VideoUploadButtons from '../../components/VideoUploadButtons/VideoUploadButtons';

function VideoUpload() {
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
            <VideoUploadInputs /> 
          </section>
        </div>
        <VideoUploadButtons />

    </>
  )
}

export default VideoUpload