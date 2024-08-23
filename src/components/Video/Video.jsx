import "./Video.scss"; 
import { useEffect, useState } from "react";
import axios from 'axios';

function Video({ id }) {


  const [videos, setVideos] = useState(null);


    useEffect(() => {
        if (id === null) return;

        const getVideos = async () => {
            let baseURL ="https://unit-3-project-api-0a5620414506.herokuapp.com/"
            let apiKey =  "c41dc0e3-c48e-4dc1-8c03-1f8fcc163099"
            const response = await axios.get(`${baseURL}videos/${id}/?api_key=${apiKey}`)
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
