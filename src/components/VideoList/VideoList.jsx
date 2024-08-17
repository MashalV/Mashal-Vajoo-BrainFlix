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
        <img class= "list" src={video.image} alt={video.title} />
        {video.title}
        {video.channel}
      </li>
    </>
  );
}

export default VideoList;
