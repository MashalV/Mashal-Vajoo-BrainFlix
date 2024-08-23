import React from "react";
import "./VideoList.scss";
import { Link } from 'react-router-dom';

function VideoList({ videos }) {
  return (
    <>

    {videos.map((video) => (

        <li>
            <Link className = "list" to={`/videos/${video.id}`}>
                <img className= "list__img" src={video.image} alt={video.title} />
                <div className= "list__details">
                    <div className="list__details--title">
                        {video.title}
                    </div>
                    <div className="list__details--channel">
                    {video.channel}
                    </div>
                </div>
            </Link>
      </li>
    ))}
    </>
  );
}

export default VideoList;
