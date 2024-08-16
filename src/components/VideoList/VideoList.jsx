import React from "react";

function VideoList({ video, setter }) {
  return (
    <>
      <li
        onClick={() => {
          setter(video);
        }}
      >
        <img src={video.image} alt={video.title} />
        {video.title}
      </li>
    </>
  );
}

export default VideoList;
