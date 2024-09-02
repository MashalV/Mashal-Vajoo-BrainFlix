import "./Video.scss"; 
import { useEffect, useState } from "react";
import axios from 'axios';

function Video({ id, details}) {

  console.log({ details });

  const [videos, setVideos] = useState(null);


    // useEffect(() => {
    //     if (id === null) return;

    //     const getVideos = async () => {
    //         let baseURL = "http://localhost:8080/"
    //         const response = await axios.get(`${baseURL}videos/${id}`)
    //         console.log(response.data);
    //         setVideos(response.data);
    //     }
    //     getVideos();
    // }, [id])

    // if (videos === null) {
    //     return <div>Loading ...</div>
    // }


    const { 
      image,
    } = details;

  return (
    <>
      <section className="player">
          <video className="player__video" poster={image} src={details} controls />
        </section>
    </>
  );
}

export default Video;
