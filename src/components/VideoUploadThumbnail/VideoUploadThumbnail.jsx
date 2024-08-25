import React from 'react';
import "./VideoUploadThumbnail.scss";

function VideoUploadThumbnail() {
  return (
    <>
        <section className= "upload">
            <span className = "upload__thumb"> VIDEO THUMBNAIL</span>
            <img className = "upload__thumb--img" src="/src/assets/images/Upload-video-preview.jpg" alt="man at the starting line of a race"/>
        </section>
    </>
  )
}

export default VideoUploadThumbnail