import "./Video.scss"; 
import { useEffect, useState } from "react";
import axios from 'axios';

function Video({ id }) {



  const [videos, setVideos] = useState(null);


    useEffect(() => {
        if (id === null) return;

        const getVideos = async () => {
            let baseURL = "http://localhost:8080/"
            const response = await axios.get(`${baseURL}videos/${id}`)
            console.log(response.data);
            setVideos(response.data);
        }
        getVideos();
    }, [id])

    if (videos === null) {
        return <div>Loading ...</div>
    }


    const { 
      image,
    } = videos;

  return (
    <>
      <section className="player">
          <video className="player__video" poster={image} src={videos} controls />
        </section>
    </>
  );
}

export default Video;
