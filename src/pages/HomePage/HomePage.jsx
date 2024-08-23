import React from 'react'
import Navigation from "../../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
import "./HomePage.scss";
import Video from "../../components/Video/Video";
import axios from 'axios'; 
import { useParams } from 'react-router-dom';


function Homepage() {

    const { idFromParams } = useParams();

    const [videos, setVideos] = useState([]);

    let defaultVideoId = null;

    if (videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = idFromParams ?? defaultVideoId;

    const currentVideo = videos.filter(video => video.id === videoIdToDisplay)
    console.log(currentVideo);

    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay)
    console.log(filteredVideos);


    useEffect(() => {
        const getVideos = async () => {
            let baseURL ="https://unit-3-project-api-0a5620414506.herokuapp.com/"
            let apiKey =  "c41dc0e3-c48e-4dc1-8c03-1f8fcc163099"
            const response = await axios.get(`${baseURL}videos/?api_key=${apiKey}`)
            console.log(response.data);
            setVideos(response.data);
        }
        getVideos();
    }, [])


  return (
    <>
      <Navigation />
      <Video id = {videoIdToDisplay} />
      <div className = "wrapper">
        <section className="wrapper__left">
          <VideoDetails id={videoIdToDisplay} />
        </section>
        <section className = "wrapper__right">
          <label className="titled">NEXT VIDEOS</label>
          <ul className="video__list">
              <VideoList videos = {filteredVideos} />
          </ul>
        </section>
      </div>
      
    </>
  )
}

export default Homepage