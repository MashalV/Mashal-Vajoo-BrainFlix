import Navigation from "./components/Navigation/Navigation";
import videos from "../src/data/video-details.json";
import { useState } from "react";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const list = videos.filter((v) => v.id !== selectedVideo.id);

  return (
    <>
      <Navigation />
      <section>
        <ul className="video__list">
          {list.map((video) => (
            <VideoList key={video.id} video={video} setter={setSelectedVideo} />
          ))}
        </ul>
      </section>
      <VideoDetails video={selectedVideo} />
    </>
  );
}

export default App;
