import React, { useState } from 'react';
import "./VideoUploadButtons.scss";
import { useNavigate } from 'react-router-dom';

function VideoUploadButtons({ onFormSubmit }) {

    const [successMessage, setSuccessMessage] = useState (false);
    const navigate = useNavigate(); 

    const handlePublishClick =  async () => {

        await onFormSubmit();
        
        setSuccessMessage(true);

        setTimeout(()=>{
            navigate("/");
        }, 2000);
    };

  return (
    <>
        <section className= "upload">
            <section className= "container">
              <section className = "upload__publish container__pub">
                <img className="upload__publish--img" src="/src/assets/images/icons/upload.svg" alt="upload"></img>
                <button onClick = {handlePublishClick} className = "upload__publish--btn"> PUBLISH </button>
              </section>
              <button className = "upload__cancel container__can"> CANCEL </button>
            </section>

            {successMessage && (
            <div className ="success"> Published! Redirecting ... </div>
        )}
        </section>

        
    </>
  )
}

export default VideoUploadButtons