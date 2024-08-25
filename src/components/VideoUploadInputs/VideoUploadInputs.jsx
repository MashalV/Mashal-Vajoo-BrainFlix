import React from 'react';
import "./VideoUploadInputs.scss";

function VideoUploadInputs() {
  return (
    <>
        <section className= "upload">
    
            <span className = "upload__add" > TITLE YOUR VIDEO</span>
            <input className= "upload__add--in" type="text" placeholder ="Add a title to your video" />
            <span className = "upload__description"> ADD A VIDEO DESCRIPTION </span>
            <input className= "upload__description--in" type="text" placeholder ="Add a description to your video" />
            
        </section>
    </>
  )
}

export default VideoUploadInputs