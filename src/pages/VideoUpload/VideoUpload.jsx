import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <>
        <Navigation /> 
        <section className= "upload">
            <h1 className = "upload__title">Upload Video</h1>
            <span className = "upload__thumb"> VIDEO THUMBNAIL</span>
            <img className = "upload__thumb--img" src="/src/assets/images/Upload-video-preview.jpg" alt="man at the starting line of a race"/>
            <span className = "upload__add" > TITLE YOUR VIDEO</span>
            <input className= "upload__add--in" type="text" placeholder ="Add a title to your video" />
            <span className = "upload__description"> ADD A VIDEO DESCRIPTION </span>
            <input className= "upload__description--in" type="text" placeholder ="Add a description to your video" />
            <section className= "box">
              <section className = "upload__publish box__pub">
                <img className="upload__publish--img" src="/src/assets/images/icons/upload.svg" alt="upload"></img>
                <button className = "upload__publish--btn"> PUBLISH </button>
              </section>
              <button className = "upload__cancel box__can"> CANCEL </button>
            </section>

        </section>

    </>
  )
}

export default VideoUpload