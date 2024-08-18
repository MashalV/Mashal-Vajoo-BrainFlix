import React from "react";
import "./VideoList.scss";

function VideoList({ video, setter }) {
  return (
    <>
      <li
        onClick={() => {
          setter(video);
        }}
      >
        <section className="list">
            <img className= "list__img" src={video.image} alt={video.title} />
            <div className= "list__details">
                <div className="list__details--title">
                    {video.title}
                </div>
                <div className="list__details--channel">
                {video.channel}
                </div>
            </div>
        </section>
      </li>
    </>
  );
}

export default VideoList;
