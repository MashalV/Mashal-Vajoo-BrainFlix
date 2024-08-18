import React from "react";
import "./VideoList.scss";

function VideoList({ video, setter }) {
  return (
    <>
      <li className = "list"
        onClick={() => {
          setter(video);
        }}
      >
            <img className= "list__img" src={video.image} alt={video.title} />
            <div className= "list__details">
                <div className="list__details--title">
                    {video.title}
                </div>
                <div className="list__details--channel">
                {video.channel}
                </div>
            </div>
      </li>
    </>
  );
}

export default VideoList;
